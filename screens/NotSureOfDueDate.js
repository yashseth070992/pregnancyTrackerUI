import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { globalStyles } from '../styles/globalStyles'; // Adjust the import based on your project structure
import HeaderWithLogo from '../components/HeaderWithLogo';
const NotSureOfDueDate = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  // Show Date Picker
  const showDatepicker = () => {
    setShow(true);
  };

  // Handle Date Change
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // On iOS, the picker stays open
    setDate(currentDate); // Update the date
  };

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading="What was the first day of your last menstrual period?" />

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
        onPress={() => {
          // Calculate due date logic can be added here
          navigation.navigate('NextScreen'); // Navigate to the next step
        }}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Calculate
      </Button>

      <Button
        mode="text"
        onPress={() => {
          // Calculate due date logic can be added here
          navigation.navigate('Welcome'); // Navigate to the next step
        }}
        style={globalStyles.buttonSecondary}
        labelStyle={globalStyles.buttonSecondaryText}
      >
        Cancel
      </Button>
    </View>
  );
};

export default NotSureOfDueDate;
