import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'; // Import the routes

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
