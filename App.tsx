import React from 'react';
import Crypto from './src/page/crypto';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/page/Home';

type RootStackParamList = {
  Home: undefined;
  Crypto: {tag: string; name: string};
  // Outras rotas
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Crypto App',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: '#f5f5f5'},
            headerStyle: {backgroundColor: '#1b1b1d'},
            headerLargeTitle: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Crypto"
          component={Crypto}
          options={{
            title: 'Histórico',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: '#f5f5f5'},
            headerStyle: {backgroundColor: '#1b1b1d'},
            headerLargeTitleStyle: {color: '#f5f5f5'},
            headerTintColor: '#f5f5f5',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
