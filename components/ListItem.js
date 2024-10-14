import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const ListItem = ({ icon, text }) => (
  <View style={styles.card}>
    <Ionicons name={icon} style={styles.icon} size={30} />
    <View style={styles.textContainer}>
      <Text style={globalStyles.boldText}>{text}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: 200, // Fixed width for the card
  },
  icon: {
    marginRight: 16, // Add space between the icon and text
  },
  textContainer: {
    flex: 1, // Allow the text container to take up remaining space
  },
});

export default ListItem;
