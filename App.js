import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Provider,Portal } from 'react-native-paper';
import { ShoppingButton } from './components/floating-action-button/ShoppingButton';

import { ShoppingListView } from './views';


const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='home'
          component={ShoppingListView}
          options={
            {headerShown:false}
          }
          />

          </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}


