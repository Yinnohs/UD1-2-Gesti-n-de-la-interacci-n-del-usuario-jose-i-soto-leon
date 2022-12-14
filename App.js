import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider, } from 'react-native-paper';
import { AppContextProvider } from './data/context';
import { CreateItemView, ShoppingListView } from './views';


const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <AppContextProvider>
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
            <Stack.Screen
            name='create'
            component={CreateItemView}
            options={
              {headerShown:false}
            }
            />

            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </AppContextProvider>
  );
}


