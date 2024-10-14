import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for icons
import { globalStyles } from '../styles/globalStyles';

const ListItem = ({ icon, text }) => (
  <View style={globalStyles.listItem}>
    <Ionicons name={icon} style={globalStyles.listItemIcon} />
    <Text style={globalStyles.listItemText}>{text}</Text>
  </View>
);

export default ListItem;
