import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { symptomsData } from './data/symptomsData';
const MotherSymptoms = ({ week }) => {
  const symptoms = symptomsData[week] || symptomsData[4];

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Mother’s Symptoms</Text>
      {symptoms.map((symptom, index) => (
        <Text key={index} style={globalStyles.paragraph}>
          {symptom}
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

export default MotherSymptoms;
