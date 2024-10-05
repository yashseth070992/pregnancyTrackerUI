import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

// Dummy data for recommended products
const products = [
  {
    id: '1',
    name: 'Pregnancy Pillow',
    description: 'A comfortable pillow for better sleep during pregnancy.',
    price: '$35',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Prenatal Vitamins',
    description: 'Essential vitamins to support a healthy pregnancy.',
    price: '$25',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Maternity Belt',
    description: 'Supportive belt to reduce back pain and discomfort.',
    price: '$40',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Stretch Mark Cream',
    description: 'Helps reduce the appearance of stretch marks.',
    price: '$15',
    imageUrl: 'https://via.placeholder.com/100',
  },
];

// ProductCard Component
const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={globalStyles.boldText}>{product.name}</Text>
      <Text style={globalStyles.paragraph}>{product.description}</Text>
      <Text style={globalStyles.smallText}>{product.price}</Text>
    </View>
  </View>
);

const RecommendationList = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headingCentered}>Recommended Products</Text>
      {/* FlatList used to render product recommendations */}
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