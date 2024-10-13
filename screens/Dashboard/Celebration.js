import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles'; // Import global styles
import { celebrationData } from './data/celebrationData'; // Import celebration data

const Celebration = ({ week }) => {
  const [babyBumpImage, setBabyBumpImage] = useState(null);
  const celebration = celebrationData[week] || celebrationData[4]; // Default to week 4 if data for the week is not available

  const handleCapturePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access the camera is required!');
      return;
    }

    // Open the camera and capture a photo
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setBabyBumpImage(result.assets[0].uri);
      console.log('Captured Image URI: ', result.assets[0].uri); // Debugging the image URI
    } else {
      console.log('Image capture was canceled.');
    }
  };

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.heading}>Celebration</Text>
      <View style={globalStyles.contentContainer}>
        {babyBumpImage && (
          <Image
            source={{ uri: babyBumpImage }}
            style={globalStyles.imagePreview}
          />
        )}
        <TouchableOpacity
          onPress={handleCapturePhoto}
          style={globalStyles.contentContainer}
        >
          <Ionicons
            name="camera"
            size={40}
            style={globalStyles.iconDarkColor}
          />
        </TouchableOpacity>
        {!babyBumpImage && (
          <Text style={globalStyles.paragraph}>
            Congrats on reaching {week} weeks! Don’t forget to capture your
            growing baby bump!{' '}
          </Text>
        )}
        {babyBumpImage && (
          <Text style={globalStyles.paragraph}>
            Not happy with the photo? Would you like to capture your baby bump
            again?
          </Text>
        )}
      </View>
    </View>
  );
};

export default Celebration;
