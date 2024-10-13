import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { symptomsData } from './data/symptomsData';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const MotherSymptoms = ({ week }) => {
  const symptoms = symptomsData[week] || symptomsData[4];

  const renderItem = ({ item }) => (
    <View style={globalStyles.symptomItem}>
      <Ionicons
        name={item.icon}
        size={20}
        color="#42A5F5"
        style={globalStyles.symptomIcon}
      />
      <Text style={globalStyles.paragraph}>{item.symptom}</Text>
    </View>
  );

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardHeadingCentered}>
        Mother’s Symptoms (Week {week})
      </Text>
      <FlatList
        data={symptoms}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={globalStyles.list}
      />
    </View>
  );
};

export default MotherSymptoms;
