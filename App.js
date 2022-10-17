import React  from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {

  const Drawer = createDrawerNavigator()


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
        <Drawer.Screen name="About" component={<View></View>} />
        <Drawer.Screen name="ShoppingList" component={<View></View>} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='auto'/>
    </SafeAreaProvider>
  );
}

