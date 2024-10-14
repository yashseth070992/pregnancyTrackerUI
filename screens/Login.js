import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';
import HeaderWithLogo from '../components/HeaderWithLogo';
import Toast from 'react-native-toast-message'; // Import toast component

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    navigation.navigate('MainDrawer', {
      screen: 'Home', // Specify the Drawer screen
      params: { email: 'yashseth07@gmail.com' }, // Pass params to the drawer
    });

    // try {
    // const response = await fetch('https://pregnancytracker-438514.el.r.appspot.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email: email, password }),
    // });

    // const result = await response.json();

    // if (response.ok) {
    //     Toast.show({
    //       type: 'success',
    //       text1: 'Login successful!',
    //     });
    //     navigation.navigate('Dashboard',  { email: email  });
    //   } else {
    //     Toast.show({
    //       type: 'error',
    //       text1: result.message || 'Login failed',
    //     });
    //   }
    // } catch (error) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Something went wrong!',
    //   });
    // }
  };

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

      <Button
        mode="contained"
        onPress={handleLogin}
        style={globalStyles.buttonPrimary}
        labelStyle={globalStyles.buttonPrimaryText}
      >
        Continue
      </Button>

      <TouchableOpacity>
        <Text style={globalStyles.footerLink}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={[globalStyles.footerLink, { marginTop: 16 }]}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>

      <Toast />
    </View>
  );
};

export default Login;
