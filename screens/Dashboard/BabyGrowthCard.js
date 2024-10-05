// BabyGrowthCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles'; // Assuming globalStyles is available
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import { babyData } from './data/babyGrowthData'; // Import the baby growth data

const BabyGrowthCard = ({ week }) => {
  const data = babyData[week] || babyData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={styles.card}>
      <Text style={globalStyles.cardTitle}>Baby Size: {data.size}</Text>
      <Ionicons
        name="ice-cream-outline"
        size={60}
        color="#F48FB1"
        style={styles.icon}
      />
      <Text style={globalStyles.cardText}>{data.growthDetail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    ...globalStyles.card,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default BabyGrowthCard;
