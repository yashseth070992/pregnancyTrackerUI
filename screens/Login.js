import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { globalStyles } from '../styles/globalStyles';
import HeaderWithLogo from '../components/HeaderWithLogo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  return (
    <View style={globalStyles.container}>
      <HeaderWithLogo heading="Welcome back!" />

      <Text style={globalStyles.paragraph}>
        Log in with your BabyCentre account
      </Text>

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
          style={[globalStyles.input, globalStyles.inputWithIcon]} // Adjusted input with icon
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle visibility
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={globalStyles.icon}
          onPress={() => setShowPassword(!showPassword)} // Toggle visibility on press
        >
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'} // Change icon based on state
            size={24}
            color="#7F8C8D" // Secondary text color from global styles
          />
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Dashboard')}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Continue
      </Button>

      <TouchableOpacity>
        <Text style={globalStyles.footerLink}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
