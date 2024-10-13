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
      <Text style={globalStyles.headingCentered}>Celebration</Text>
      <Text style={globalStyles.paragraph}>
        Congratulations on completing {week} weeks!
      </Text>

      <View style={globalStyles.contentContainer}>
        <Text style={globalStyles.subText}>
          Capture your baby bump photo for week {week}!
        </Text>

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
        {babyBumpImage && (
          <Image
            source={{ uri: babyBumpImage }}
            style={globalStyles.imagePreview}
          />
        )}
      </View>
    </View>
  );
};

export default Celebration;
