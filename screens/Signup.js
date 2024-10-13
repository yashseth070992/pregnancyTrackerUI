import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import HeaderWithLogo from '../components/HeaderWithLogo';
import Toast from 'react-native-toast-message';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match!',
      });
      return;
    }

    try {
      const response = await fetch('https://pregnancytracker-438514.el.r.appspot.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        Toast.show({
          type: 'success',
          text1: 'Signup successful!',
        });
        navigation.navigate('Login');
      } else {
        Toast.show({
          type: 'error',
          text1: result.message || 'Signup failed',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong!',
      });
    }
  };

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading="Create your account" />

      <TextInput
        style={globalStyles.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={globalStyles.inputContainer}>
        <TextInput
          style={[globalStyles.input, globalStyles.inputWithIcon]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={globalStyles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="#7F8C8D"
          />
        </TouchableOpacity>
      </View>

      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
      />

      <Button
        mode="contained"
        onPress={handleSignup}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Sign Up
      </Button>

      <Toast />
    </View>
  );
};

export default Signup;
