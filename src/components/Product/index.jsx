import React, {Text, View, Image, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductsContext';
import {styles} from './styles';

export function Product({item, viewed}) {
  const {viewProduct} = useContext(ProductsContext);

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {item.text}
        </Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
      {viewed && (
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={() => viewProduct(item)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
