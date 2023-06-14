import React, {useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductsContext';
import {ThemeContext} from '../../contexts/ThemeContext';
import {AuthContext} from '../../contexts/AuthContext';
import {styles} from './styles';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import StatusBar from '../../components/StatusBar';
import {products} from './products';
import {Product} from '../../components/Product';
import Feather from 'react-native-vector-icons/Feather';

export default function Main({navigation}) {
  const {quantity, lastView} = useContext(ProductsContext);
  const {theme, themes} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);

  const style = styles(themes);

  const titleStyle = {paddingLeft: 16};

  const renderListHeader = () => (
    <View>
      {lastView.length > 0 && (
        <View style={style.lastView}>
          <Text style={style.titleLastView}>Últimos vistos</Text>
          <FlatList
            data={lastView}
            keyExtractor={item => Math.random()}
            renderItem={({item}) => <Product item={item} viewed={false} />}
            style={style.list}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
      <Text style={[style.title, titleStyle]}>Produtos</Text>
    </View>
  );

  return (
    <View style={style.container}>
      {/* <StatusBar
        style="auto"
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      /> */}
      <View style={style.titleArea}>
        <Text style={style.title}>Olá, {user.name}</Text>
        <View style={style.cartArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Resume')}>
            <Feather
              name="shopping-cart"
              size={30}
              color="#fff"
              style={style.cartIcon}
            />
          </TouchableOpacity>
          {quantity > 0 && (
            <View style={style.cartQuantityArea}>
              <Text style={style.cartQuantity}>{quantity}</Text>
            </View>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={style.iconArea}>
            <Feather
              name="settings"
              size={30}
              color="#fff"
              style={style.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => Math.random()}
        renderItem={({item}) => <Product item={item} viewed={true} />}
        style={style.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
      />
    </View>
  );
}
