import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles'; // Assuming globalStyles is available
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons

const BabyGrowthCard = ({ week }) => {
  // Data for baby growth could be fetched or defined here.
  const babyData = {
    4: {
      size: 'Poppy Seed',
      growthDetail: 'Your baby is starting to form organs.',
    },
    5: { size: 'Sesame Seed', growthDetail: 'The heart is beginning to beat!' },
    // ... other weeks
  };

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
