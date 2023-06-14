import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../contexts/AuthContext';
import {ThemeContext} from '../../contexts/ThemeContext';
import {styles} from './styles';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import StatusBar from '../../components/StatusBar';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, login} = useContext(AuthContext);
  const {theme, themes} = useContext(ThemeContext);

  const style = styles(themes);

  const handleLogin = () => {
    let result = login(email, password);
    if (result === 'ok') {
      navigation.navigate('Main');
      return;
    }
    Alert.alert('Erro', result);
  };

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      navigation.navigate('Main');
    }
  }, [user, navigation]);

  return (
    <View style={style.container}>
      {/* <StatusBar
        style="auto"
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      /> */}

      <Text style={style.title}>Login</Text>

      <View style={style.inputArea}>
        <TextInput
          style={style.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={style.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
