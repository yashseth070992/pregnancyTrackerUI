import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { products } from './data/recommendationList';

const ProductCard = ({ product }) => (
  <TouchableOpacity onPress={() => Linking.openURL(product.productUrl)}>
    <View style={styles.card}>
      <Image source={product.imageUrl} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={globalStyles.boldText}>{product.name}</Text>
        <Text style={globalStyles.paragraph}>{product.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const RecommendationList = () => {
  return (
    <View>
      <Text style={globalStyles.heading}>Recommended Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
});

export default RecommendationList;
