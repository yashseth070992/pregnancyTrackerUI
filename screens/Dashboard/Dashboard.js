import React, { useState } from 'react';
import { FlatList } from 'react-native';
import BabyGrowthCard from './BabyGrowthCard';
import MotherSymptoms from './MotherSymptoms';
import ThingsToDo from './ThingsToDo';
import Celebration from './Celebration';
import DailyReads from './DailyReads';
import RecommendationList from './RecommendationList';
import HeaderComponent from './HeaderComponent'; // Import the new header component
import { globalStyles } from '../../styles/globalStyles';

const Dashboard = () => {
  const [currentWeek, setCurrentWeek] = useState(20); // Set the initial week

  // Function to go to the next week (max 40 weeks)
  const onNextWeek = () => {
    if (currentWeek < 40) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  // Function to go to the previous week (min 1 week)
  const onPreviousWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const data = [{ key: 'recommendationList' }]; // Placeholder data for FlatList

  return (
    <FlatList
      data={data}
      style={globalStyles.container}
      keyExtractor={(item) => item.key}
      ListHeaderComponent={
        <>
          <HeaderComponent
            currentWeek={currentWeek}
            dateRange="Oct 04 - Oct 10"
            message="Cozy times ahead 😊"
            onNextWeek={onNextWeek}
            onPreviousWeek={onPreviousWeek}
          />

          <BabyGrowthCard week={currentWeek} />
          <MotherSymptoms week={currentWeek} />
          <ThingsToDo week={currentWeek} />
          <Celebration week={currentWeek} />
        </>
      }
      renderItem={() => <RecommendationList />}
      ListFooterComponent={<DailyReads week={currentWeek} />}
    />
  );
};

export default Dashboard;