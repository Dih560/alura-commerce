import React, {useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductsContext';
import {ThemeContext} from '../../contexts/ThemeContext';
import {AuthContext} from '../../contexts/AuthContext';
import {styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import StatusBar from '../../components/StatusBar';
import Feather from 'react-native-vector-icons/Feather';
import {Product} from '../../components/Product';

export default function Resume({navigation}) {
  const {quantity, cart} = useContext(ProductsContext);
  const {theme, themes} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);

  const style = styles(themes);

  return (
    <View style={style.container}>
      {/* <StatusBar style="auto" barStyle="dark-content" /> */}
      <View style={style.titleArea}>
        <Text style={style.title}>{user.name}</Text>
        <View style={style.cartArea}>
          <Feather
            name="shopping-cart"
            size={30}
            color="#fff"
            style={style.cartIcon}
          />
          <View style={style.cartQuantityArea}>
            <Text style={style.cartQuantity}>{quantity}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={cart}
        keyExtractor={item => Math.random()}
        renderItem={({item}) => <Product item={item} />}
        style={style.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Finish')}>
        <Text style={style.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
