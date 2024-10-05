import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { celebrationData } from './data/celebrationData';
const Celebration = ({ week }) => {
  const celebration = celebrationData[week] || celebrationData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Celebration</Text>
      {celebration.map((item, index) => (
        <Text key={index} style={globalStyles.paragraph}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default Celebration;
