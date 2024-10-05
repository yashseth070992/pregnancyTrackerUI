import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import NotSureOfDueDate from './screens/NotSureOfDueDate';
import TryingToConceive from './screens/TryingToConceive';
import Dashboard from './screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const currentWeek = 5; // This could come from user data
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* Welcome Screen Route */}
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      {/* Login Screen Route */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      {/* Not Sure of Due Date Screen Route */}
      <Stack.Screen
        name="NotSureOfDueDate"
        component={NotSureOfDueDate}
        options={{ headerShown: false }}
      />

      {/* Trying to Conceive Screen Route */}
      <Stack.Screen
        name="TryingToConceive"
        component={TryingToConceive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        options={{ title: 'My Pregnancy Journey' }}
      >
        {(props) => <Dashboard {...props} currentWeek={currentWeek} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
