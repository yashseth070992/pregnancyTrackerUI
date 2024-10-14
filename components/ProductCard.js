import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    width: 260,
    marginRight: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfo: {
    marginTop: 12,
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B3B58',
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default ProductCard;
