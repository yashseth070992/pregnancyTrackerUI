import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; // Import global styles

const Loader = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 300); // Adjust timing for better effect
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[globalStyles.contentContainer, globalStyles.lightBackground]}>
      <ActivityIndicator size="large" color={globalStyles.loaderText.color} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Text style={globalStyles.loaderText}>Loading</Text>
        <Text style={[globalStyles.loaderText, { minWidth: 20 }]}>{dots}</Text>
      </View>
    </View>
  );
};

export default Loader;
