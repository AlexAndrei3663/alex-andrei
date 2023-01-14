import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import CarrinhoCompras from './atv-carrinho/CarrinhoCompras'
import HomeScreen from './atv-carrinho/Home'
import Produtos from './atv-carrinho/Produtos'

const Stack = createNativeStackNavigator();

export default function App() {




  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> 
      </NavigationContainer>
    </PaperProvider>
  )
}