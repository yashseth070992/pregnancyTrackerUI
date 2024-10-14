import React from 'react';
import { View, FlatList, Text } from 'react-native';
import ListItem from './ListItem'; // Import the generic ListItem component
import { globalStyles } from '../styles/globalStyles';

const ListItems = ({ data, heading }) => {
  const renderItem = ({ item }) => (
    <ListItem icon={item.icon} text={item.symptom || item.task} />
  );

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.heading}>{heading}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal // Makes the FlatList horizontal
        showsHorizontalScrollIndicator={false} // Hides the scroll indicator
        contentContainerStyle={{ paddingHorizontal: 10 }} // Optional padding for styling
      />
    </View>
  );
};

export default ListItems;
