import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const HeaderWithLogo = ({ heading }) => {
  return (
    <View style={globalStyles.headerContainer}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={globalStyles.logo} />

      {/* Heading */}
      <Text style={globalStyles.headingCentered}>{heading}</Text>
    </View>
  );
};

export default HeaderWithLogo;
