import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Import Ionicons for icons
import { babyData } from './data/babyGrowthData'; // Import the baby growth data
import babyGrowthImage from '../../assets/babyGrowth.png'; // Replace with your actual image path
import { colors } from '../../styles/theme'; // Import the colors object

const BabyGrowthCard = ({ week }) => {
  const data = babyData[week] || babyData[4]; // Default to week 4 if data for the week is not available

  return (
    <View style={[styles.cardContainer]}>
      <Text style={styles.heading}>Baby Size: {data.size}</Text>

      <View style={styles.contentContainer}>
        <Image source={babyGrowthImage} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <View style={styles.labelRow}>
              <Ionicons
                name="brush-outline"
                size={20}
                color={colors.textPrimary}
                style={styles.icon}
              />
              <Text style={styles.detailLabel}>Length</Text>
            </View>
            <Text style={styles.detailValue}>{data.length}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.labelRow}>
              <Ionicons
                name="scale"
                size={20}
                color={colors.textPrimary}
                style={styles.icon}
              />
              <Text style={styles.detailLabel}>Weight</Text>
            </View>
            <Text style={styles.detailValue}>{data.weight}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.growthDetail}>{data.growthDetail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.backgroundPrimary, // Use backgroundPrimary from colors
    borderRadius: 15,
    padding: 16,
    marginVertical: 10,
    shadowColor: colors.shadowColor,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary, // Use textPrimary from colors
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'column', // Stack the icon/label row and the value
    alignItems: 'center',
    marginBottom: 10,
  },
  labelRow: {
    flexDirection: 'row', // Icon and label in the same row
    alignItems: 'center',
    marginBottom: 4,
  },
  icon: {
    marginRight: 6, // Space between icon and label
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.textPrimary, // Use textPrimary for label
  },
  detailValue: {
    fontSize: 14,
    color: colors.textPrimary, // Use textPrimary for value
    marginTop: 2, // Small space between label and value
  },
  growthDetail: {
    fontSize: 16,
    color: colors.textPrimary, // Use textPrimary for the growth detail
    textAlign: 'center',
    marginTop: 10,
  },
});

export default BabyGrowthCard;
