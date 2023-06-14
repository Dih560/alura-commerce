import React, {useContext} from 'react';
import {ThemeContext} from '../../contexts/ThemeContext';
import {styles} from './styles';
import {Switch, Text, View} from 'react-native';
import StatusBar from '../../components/StatusBar';

export default function Settings() {
  const {theme, themes, setTheme} = useContext(ThemeContext);
  const style = styles(themes);

  return (
    <View style={style.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={style.title}>Configuração</Text>

      <View style={style.inputArea}>
        <Text style={style.subtitle}>Theme: {theme}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          value={theme === 'dark'}
        />
      </View>
    </View>
  );
}
