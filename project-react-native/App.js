import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Cartela from './atv-bingo/Cartela';
import Sorteio from './atv-bingo/Sorteio';

let cartelaInicial = [];
for (let index = 0; index < 15; index++) {
  const random = 0;
  const valid = undefined;
  do {
    random = Math.ceil(Math.random() * 60);
    valid = cartelaInicial.find(element => random===element.number);
  } while (valid != undefined);
  cartelaInicial.push({
    key: index,
    number: random,
    marked: false
  });
}

export default function App() {
  const [cartela, setCartela] = useState(cartelaInicial);

  const markNumber = item => {
    cartelaInicial[parseInt(item)].marked=true;
    setCartela(cartelaInicial);
    const bingo = cartela.find(element => element.marked===false);
    if(bingo===undefined)
      Alert.alert("BIMGO!!!!!", "Você Ganhou!!!!");
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>BINGO!!!</Text>
      <Cartela cartela={cartela} />
      <Sorteio cartela={cartela} markNumber = {markNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    lineHeight: 42,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
