import React, {useContext} from 'react';
import {ProductsContext} from '../../contexts/ProductsContext';
import {ThemeContext} from '../../contexts/ThemeContext';
import {AuthContext} from '../../contexts/AuthContext';
import {styles} from './styles';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import StatusBar from '../../components/StatusBar';

export default function Finish({navigation}) {
  const {quantity, totalPrice, finishPurchase} = useContext(ProductsContext);
  const {theme, themes} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);

  const style = styles(themes);

  const finish = async () => {
    finishPurchase()
      .then(result => {
        Alert.alert('Sucesso', result);
        navigation.navigate('Main');
      })
      .catch(err => Alert.alert('Erro', err));
  };

  return (
    <View style={style.container}>
      {/* <StatusBar style="auto" barStyle="dark-content" /> */}
      <View style={style.addressArea}>
        <Text style={style.title}>Informações de entrega</Text>
        <Text style={style.text}>Nome: {user.name}</Text>
        <Text style={style.text}>Endereço: {user.address}</Text>
        <Text style={style.text}>Email: {user.email}</Text>
        <Text style={style.text}>Telefone: {user.phone}</Text>
      </View>
      <View style={style.resumeArea}>
        <Text style={style.text}>Quantidade: {quantity}</Text>
        <Text style={style.text}>Preço Total: R$ {totalPrice}</Text>
      </View>
      <TouchableOpacity style={style.button} onPress={finish}>
        <Text style={style.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}
