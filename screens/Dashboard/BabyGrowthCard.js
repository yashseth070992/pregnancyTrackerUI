import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles'; // Assuming globalStyles is available
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons
import { babyData } from './data/babyGrowthData'; // Import the baby growth data

const BabyGrowthCard = ({ week }) => {
  const data = babyData[week] || babyData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={globalStyles.card}>
      {/* Baby Size Text */}
      <Text style={globalStyles.cardHeadingCentered}>
        Baby Size: {data.size}
      </Text>

      {/* Icon below heading */}
      <Ionicons
        name="ice-cream-outline"
        size={60}
        color="#4CAF50"
        style={globalStyles.icon} // Reused icon styling from globalStyles
      />

      {/* Baby Growth Detail */}
      <Text style={globalStyles.paragraph}>{data.growthDetail}</Text>

      {/* Baby Length and Weight */}
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.smallText}>Length: {data.length}</Text>
        <Text style={globalStyles.smallText}>Weight: {data.weight}</Text>
      </View>

      {/* Optional Image */}
      {data.image && <Image source={data.image} style={globalStyles.image} />}
    </View>
  );
};

export default BabyGrowthCard;
