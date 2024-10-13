import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TryingToConceive from './screens/TryingToConceive';
import Dashboard from './screens/Dashboard/Dashboard';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const currentWeek = 5; // This could come from user data

  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Login Screen Route */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />

      {/* Trying to Conceive Screen Route */}
      <Stack.Screen
        name="TryingToConceive"
        component={TryingToConceive}
        options={{ headerShown: false }}
      />

      {/* Dashboard Screen Route */}
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }} // Disable header from here
      />
    </Stack.Navigator>
  );
}
