import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import TryingToConceive from './screens/TryingToConceive';
import Dashboard from './screens/Dashboard/Dashboard';
import EditProfile from './screens/EditProfile'; // Import the Edit Profile screen
import { colors } from './styles/theme'; // Import the theme file

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainDrawer({ route }) {
  const { email } = route.params; // Get the email from route params

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.backgroundPrimary, // Set drawer background color
          borderColor: colors.borderPrimary, // Set border color for drawer
        },
        drawerLabelStyle: {
          color: colors.textPrimary, // Text color inside the drawer
        },
        drawerContentOptions: {
          activeTintColor: colors.buttonTextSecondary, // Active item text color
          inactiveTintColor: colors.textPrimary, // Inactive item text color
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Dashboard}
        options={{ headerShown: false }}
        initialParams={{ email }} // Pass email as initialParams to Dashboard
      />
      <Drawer.Screen
        name="Edit Profile"
        options={{ headerShown: false }} // Hide header for Dashboard
        component={EditProfile}
      />
    </Drawer.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
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
      <Stack.Screen
        name="TryingToConceive"
        component={TryingToConceive}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer} // Use the Drawer instead of the direct Dashboard screen
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
