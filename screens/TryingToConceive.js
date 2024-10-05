import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { globalStyles } from '../styles/globalStyles'; // Adjust the import path as per your project structure
import HeaderWithLogo from '../components/HeaderWithLogo';
const TryingToConceive = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading="Tell us more to customise your experience" />
      <TextInput
        style={globalStyles.input}
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={globalStyles.row}>
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle visibility of password
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={globalStyles.iconButton} // Assuming you have some style for a button/icon
        >
          <Text>{showPassword ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={() => {}}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Continue
      </Button>

      <Button
        mode="text"
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
        style={globalStyles.buttonSecondary}
        labelStyle={globalStyles.buttonSecondaryText}
      >
        Cancel
      </Button>
    </View>
  );
};

export default TryingToConceive;
