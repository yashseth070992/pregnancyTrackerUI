import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { dailyReadsData } from './data/dailyReadsData';

const DailyReads = ({ week }) => {
  // Data for things to do per week

  const dailyRead = dailyReadsData[week] || dailyReadsData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Things To Do</Text>
      {dailyRead.map((item, index) => (
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

export default DailyReads;
