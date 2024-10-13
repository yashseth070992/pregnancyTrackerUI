import React, { useEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../styles/theme'; 

const CustomHeader = ({ navigation, email }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`https://pregnancytracker-438514.el.r.appspot.com/users/${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        if (response.ok) {
          setUserInfo(result);
        } else {
          console.error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [email]);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSection}>
        <Avatar
          rounded
          source={{
            uri: userInfo?.avatarUrl || 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
          }}
          size="medium"
        />
        <Text style={styles.greetingText}>
        Hi, {userInfo?.firstName ? userInfo.firstName.charAt(0).toUpperCase() + userInfo.firstName.slice(1) : 'User'}
        </Text>
      </View>

      <View style={styles.rightSection}>
        <Ionicons
          name="settings-outline"
          size={28}
          color={colors.buttonTextPrimary}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.buttonPrimary,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    marginLeft: 10,
    fontSize: 18,
    color: colors.buttonTextPrimary,
    fontWeight: 'bold',
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;