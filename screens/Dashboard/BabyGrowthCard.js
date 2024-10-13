import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles'; // Assuming globalStyles is available
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import { babyData } from './data/babyGrowthData'; // Import the baby growth data
import babyGrowthImage from '../../assets/babyGrowing.png'; // Replace with your actual image path

const BabyGrowthCard = ({ week }) => {
  const data = babyData[week] || babyData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.heading}>Baby Size: {data.size}</Text>
      <Image source={babyGrowthImage} style={globalStyles.imagePreviewGrowth} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.smallText}>Length: {data.length}</Text>
        <Text style={globalStyles.smallText}>Weight: {data.weight}</Text>
      </View>
      <Text style={globalStyles.paragraph}>{data.growthDetail}</Text>
    </View>
  );
};

export default BabyGrowthCard;
