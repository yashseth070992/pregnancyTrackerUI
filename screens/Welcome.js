// Welcome.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../styles/globalStyles';
import HeaderWithLogo from '../components/HeaderWithLogo';
import NotSureOfDueDate from './NotSureOfDueDate';

const Welcome = ({ userInfo, onSuccess }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showNotSureOfDueDate, setShowNotSureOfDueDate] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
    setShow(false);
  };

  const updateDueDate = async () => {
    try {
      const response = await fetch(
        `https://pregnancytracker-438514.el.r.appspot.com/users/${userInfo.email}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dueDate: date.toISOString().split('T')[0] }),
        },
      );

      if (response.ok) {
        console.log('Due date updated successfully');
        onSuccess(); // Trigger the callback to reload Dashboard
      } else {
        console.error('Failed to update due date:', response.statusText);
      }
    } catch (error) {
      console.error('Error during the API call:', error);
    }
  };

  if (showNotSureOfDueDate) {
    return <NotSureOfDueDate userInfo={userInfo} onSuccess={onSuccess} />; // Pass onSuccess to NotSureOfDueDate
  }

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading={`Welcome ${userInfo?.firstName || ''}!`} />
      <Text style={globalStyles.paragraph}>
        Enter your due date or your child's birthday to customize your
        BabyCentre journey.
      </Text>

      <TouchableOpacity
        style={globalStyles.buttonSecondary}
        onPress={showDatepicker}
      >
        <Text style={globalStyles.buttonSecondaryText}>
          {date.toDateString()}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <Button
        mode="contained"
        onPress={updateDueDate}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Get Started
      </Button>

      <TouchableOpacity
        style={globalStyles.footer}
        onPress={() => setShowNotSureOfDueDate(true)}
      >
        <Text style={globalStyles.footerLink}>I don't know my due date</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
