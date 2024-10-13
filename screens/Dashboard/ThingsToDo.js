import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { thingsToDoData } from './data/thingsToDoData';
import ListItem from '../../components/ListItem'; // Import the generic ListItem component

const ThingsToDo = ({ week }) => {
  // Data for things to do per week
  const thingsToDo = thingsToDoData[week] || thingsToDoData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.heading}>Things To Do</Text>
      {thingsToDo.map((item, index) => (
        <ListItem
          key={index}
          text={item.task} // Example icon, you can change as needed
          icon={item.icon} // Use the task as the text
        />
      ))}
    </View>
  );
};

export default ThingsToDo;
