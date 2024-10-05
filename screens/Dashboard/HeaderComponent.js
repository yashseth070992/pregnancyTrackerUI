import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../styles/theme'; // Importing theme colors

const HeaderComponent = ({ currentWeek, message, dateRange }) => {
  return (
    <View style={styles.container}>
      {/* Header Content for Week and Date */}
      <View style={styles.headerContent}>
        <Text style={styles.pregnancyText}>21 weeks & 1 day pregnant</Text>
        <Text style={styles.dateRange}>Oct 04 – Oct 10</Text>
      </View>

      <Svg height="180" width="100%" viewBox="0 0 1440 320" style={styles.wavyBackground}>
        <Path 
          fill={colors.backgroundLight} // Use the theme background color
          d="M0,128L60,133.3C120,139,240,149,360,138.7C480,128,600,96,720,101.3C840,107,960,149,1080,154.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" 
        />
      </Svg>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>Cozy times ahead 😊</Text>
        <Text style={styles.subText}>Oct 05 | 132 days left</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 20, // Space below the message box
  },
  wavyBackground: {
    position: 'absolute',
    top: 20, // Position it right under the date and pregnancy info
    left: 0,
    right: 0,
    zIndex: -1,
  },
  headerContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  pregnancyText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: colors.textPrimary, // Use primary text color from theme
  },
  dateRange: {
    fontSize: 16,
    color: colors.textSecondary, // Use secondary text color from theme
    marginTop: 5,
  },
  messageContainer: {
    backgroundColor: 'transparent', 
    alignItems: 'center',
    zIndex: 1, // Ensure it's above the wave
    marginTop: 10, // Space it closer to the wave
  },
  messageText: {
    fontSize: 18,
    color: colors.textPrimary, // Use primary text color from theme
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: colors.textSecondary, // Use secondary text color from theme
    textAlign: 'center',
  },
});

export default HeaderComponent;