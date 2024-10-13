import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { globalStyles } from '../styles/globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderWithLogo from '../components/HeaderWithLogo';
const Welcome = ({ navigation }) => {
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
      <HeaderWithLogo heading="Welcome!" />
      <Text style={globalStyles.paragraph}>
        Enter due date or child's birthday to customize your BabyCentre journey
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
        onPress={() => navigation.navigate('Login')} // Navigate to the login screen
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Get Started
      </Button>

      <TouchableOpacity
        style={globalStyles.footer}
        onPress={() => navigation.navigate('NotSureOfDueDate')}
      >
        <Text style={globalStyles.footerLink}>I don't know my due date</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.footer}
        onPress={() => navigation.navigate('TryingToConceive')}
      >
        <Text style={globalStyles.footerLink}>Trying to conceive?</Text>
      </TouchableOpacity>

      <View style={globalStyles.footer}>
        <Text style={globalStyles.footerText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.footerLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
