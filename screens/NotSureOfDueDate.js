import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../styles/globalStyles';
import HeaderWithLogo from '../components/HeaderWithLogo';

const NotSureOfDueDate = ({ userInfo, onSuccess }) => {
  // Add onSuccess prop
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [calculatedDueDate, setCalculatedDueDate] = useState(null);

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

  const calculateDueDate = () => {
    const lmp = new Date(date);
    const dueDate = new Date(lmp.setDate(lmp.getDate() + 280)); // Add 280 days (40 weeks)
    setCalculatedDueDate(dueDate);
  };

  const proceed = async () => {
    try {
      const response = await fetch(
        `https://pregnancytracker-438514.el.r.appspot.com/users/${userInfo.email}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            dueDate: calculatedDueDate.toISOString().split('T')[0],
          }),
        },
      );

      if (response.ok) {
        console.log('Due date updated successfully!');
        onSuccess(); // Trigger callback to refresh Dashboard
      } else {
        console.error('Failed to update due date');
      }
    } catch (error) {
      console.error('Error making PATCH request:', error);
    }
  };

  const edit = () => {
    setCalculatedDueDate(null);
  };

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading="What was the first day of your last menstrual period?" />

      {!calculatedDueDate ? (
        <>
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
            onPress={calculateDueDate}
            style={globalStyles.buttonPrimary}
            labelStyle={globalStyles.buttonPrimaryText}
          >
            Calculate
          </Button>
        </>
      ) : (
        <>
          <Text style={globalStyles.paragraph}>
            Your estimated due date is: {calculatedDueDate.toDateString()}
          </Text>

          <Button
            mode="contained"
            onPress={proceed}
            style={globalStyles.buttonPrimary}
            labelStyle={globalStyles.buttonPrimaryText}
          >
            Proceed
          </Button>

          <Button
            mode="text"
            onPress={edit}
            style={globalStyles.buttonSecondary}
            labelStyle={globalStyles.buttonSecondaryText}
          >
            Edit
          </Button>
        </>
      )}
    </View>
  );
};

export default NotSureOfDueDate;
