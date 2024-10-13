import React from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/theme';

const CustomHeader = ({ navigation, firstName }) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundSecondary}
      />
      <View style={styles.headerContainer}>
        <View style={styles.leftSection}>
          <Avatar
            rounded
            source={{
              uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
            }}
            size="medium"
          />
          <Text style={styles.greetingText}>
            Hi, {firstName.charAt(0).toUpperCase() + firstName.slice(1)}
          </Text>
        </View>

        <View style={styles.rightSection}>
          <Ionicons
            name="power-outline" // Use a logout icon
            size={28}
            color={colors.textSecondary}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.backgroundSecondary,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
