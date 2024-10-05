import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const MotherSymptoms = ({ week }) => {
  // Data for mother's symptoms per week
  const symptomsData = {
    4: ['Fatigue', 'Morning sickness', 'Frequent urination'],
    5: ['Nausea', 'Breast tenderness', 'Mood swings'],
    // ... other weeks
  };

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
