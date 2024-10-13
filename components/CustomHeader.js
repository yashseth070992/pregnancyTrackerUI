import React from 'react';
import { Avatar } from 'react-native-elements'; // or use Image from 'react-native'
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { colors } from '../styles/theme'; // Make sure to import your colors

export default function CustomHeader({ navigation }) {
  return {
    title: 'My Pregnancy Journey',
    headerStyle: {
      backgroundColor: colors.buttonPrimary, // Use the soft pinkish background color
    },
    headerTintColor: colors.buttonTextPrimary, // Use the deep plum color for text and icons
    headerTitleStyle: {
      fontWeight: 'bold',
      color: colors.buttonTextPrimary, // Text color for the title
    },
    headerLeft: () => (
      <View style={{ marginHorizontal: 10 }}>
        <Avatar
          rounded
          source={{
            uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Dummy avatar image URL
          }}
          size="small"
          onPress={() => console.log('Avatar pressed!')}
        />
      </View>
    ),
    headerRight: () => (
      <View style={{ marginRight: 10 }}>
        <Ionicons
          name="settings-outline" // Icon name from Ionicons
          size={20}
          color={colors.buttonTextPrimary} // Icon color matching the text color
          onPress={() => navigation.navigate('Login')} // Navigate to the login screen
        />
      </View>
    ),
  };
}
