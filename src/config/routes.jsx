import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StatusBar from '../components/StatusBar';
import {ThemeContext} from '../contexts/ThemeContext';
import {dark, light} from './globalStyles';

const Tab = createNativeStackNavigator();

import Main from '../screens/Main';
import Login from '../screens/Login';
import Settings from '../screens/Settings';
import Resume from '../screens/Resume';
import Finish from '../screens/Finish';

export default function Routes() {
  const {theme} = useContext(ThemeContext);
  const style = theme === 'dark' ? dark : light;
  return (
    <>
      <StatusBar
        backgroundColor={style.background}
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: 'Configurações', headerTitleAlign: 'center'}}
          />
          <Tab.Screen
            name="Resume"
            component={Resume}
            options={{title: 'Resumo', headerTitleAlign: 'center'}}
          />
          <Tab.Screen
            name="Finish"
            component={Finish}
            options={{title: 'Finalizar', headerTitleAlign: 'center'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
