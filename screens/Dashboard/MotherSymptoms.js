import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { symptomsData } from './data/symptomsData';
import ListItem from '../../components/ListItem'; // Import the new generic ListItem

const MotherSymptoms = ({ week }) => {
  const symptoms = symptomsData[week] || symptomsData[4];

  const renderItem = ({ item }) => (
    <ListItem icon={item.icon} text={item.symptom} />
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
