import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Landing from '../Landing';
import Welcome from '../Welcome';
import CustomHeader from '../../components/CustomHeader';
import Loader from '../../components/Loader';

const Dashboard = ({ route, navigation }) => {
  const { email } = route.params;
  const [currentWeek, setCurrentWeek] = useState(20);
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(
        `https://pregnancytracker-438514.el.r.appspot.com/users/${email}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const result = await response.json();
      if (response.ok) {
        setUserInfo(result);
        if (result.dueDate) {
          calculateCurrentWeek(result.dueDate);
        }
      } else {
        console.error('Failed to fetch user info');
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  // Function to calculate the current pregnancy week
  const calculateCurrentWeek = (dueDate) => {
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    const pregnancyStartDate = new Date(
      dueDateObj.setDate(dueDateObj.getDate() - 280),
    ); // 280 days before due date
    const diffInDays = Math.floor(
      (today - pregnancyStartDate) / (1000 * 60 * 60 * 24),
    );
    const currentPregnancyWeek = Math.floor(diffInDays / 7);

    // Ensure currentWeek is between 1 and 40 weeks
    console.log('dueDate', dueDate);
    setCurrentWeek(Math.min(Math.max(currentPregnancyWeek, 1), 40));
  };

  // Fetch user info when the dashboard mounts
  useEffect(() => {
    fetchUserInfo();
  }, [email]);

  const handleRefresh = () => {
    fetchUserInfo(); // Reload the data when the callback is triggered
  };

  const onNextWeek = () => {
    if (currentWeek < 40) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const onPreviousWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  return (
    <>
      {userInfo ? (
        userInfo.dueDate ? (
          <>
            <CustomHeader
              navigation={navigation}
              firstName={userInfo?.firstName || 'User'}
            />
            <Landing
              currentWeek={currentWeek} // Pass the calculated currentWeek
              onNextWeek={onNextWeek}
              onPreviousWeek={onPreviousWeek}
            />
          </>
        ) : (
          <Welcome userInfo={userInfo} onSuccess={handleRefresh} />
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Dashboard;
