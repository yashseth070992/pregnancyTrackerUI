import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import ProductCard from '../../components/ProductCard'; // Import the new ProductCard component
import { products } from './data/recommendationList';

const RecommendationList = () => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.heading}>Recommended Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default RecommendationList;
