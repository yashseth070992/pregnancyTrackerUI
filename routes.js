import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import NotSureOfDueDate from './screens/NotSureOfDueDate';
import TryingToConceive from './screens/TryingToConceive';
import Dashboard from './screens/Dashboard/Dashboard';
import CustomHeader from './components/CustomHeader'; // Import your custom header component
import { colors } from './styles/theme'; 
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
      <Stack.Screen
        name="Signup"
        component={Signup}
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

      {/* Dashboard Screen Route */}
      <Stack.Screen
  name="Dashboard"
  options={({ route, navigation }) => ({
    title: 'My Pregnancy Journey',
    header: () => <CustomHeader navigation={navigation} email={route.params.email} />, // Pass email as prop
    headerStyle: {
      backgroundColor: colors.buttonPrimary,
    },
    headerTintColor: colors.buttonTextPrimary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  })}
  component={Dashboard}
/>
    </Stack.Navigator>
  );
}