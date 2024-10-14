import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Logic to save updated profile information
    console.log('Profile updated:', { firstName, lastName, email });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Edit Profile</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button
        title="Save"
        mode="contained"
        onPress={handleSave}
        style={globalStyles.buttonPrimaryText}
        color={globalStyles.buttonPrimary.color}
      ></Button>
    </View>
  );
};

export default EditProfile;
