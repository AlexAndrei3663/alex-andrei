import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { FAB, Modal } from 'react-native-paper';
import NumerosSorteados from './NumerosSorteados';
import Cartela from './Cartela';
import Sorteio from './Sorteio';

// Gera um array com os valores do bingo
let numerosBingo = [];
for (let index = 1; index <= 60; index++) {
  numerosBingo.push(index);
}

// Gera a cartela para a pessoa
let cartelaAtualizacao = [];
for (let index = 0; index < 16; index++) {
  const indexNumero = Math.floor(Math.random() * numerosBingo.length);
  cartelaAtualizacao.push({
    number: numerosBingo[indexNumero],
    marked: false,
    key: index
  });

  numerosBingo.splice(indexNumero, 1);
}
// Ordena a cartela
cartelaAtualizacao.sort((a, b) => {
  return a.number - b.number;
});



export default function Bingo() {
  const [cartela, setCartela] = useState(cartelaAtualizacao)
  const [visibleModal, setVisibleModal] = useState(false)
  const [numerosSorteados, setNumerosSorteados] = useState([])

  // Controle do Modal
  const hideModal = () => setVisibleModal(false)

  const salvarNumero = (numerosBingo) => {
    setNumerosSorteados([...numerosSorteados, numerosBingo])
  }

  const markNumber = indice => {
    cartelaAtualizacao[indice].marked = true;
    setCartela(cartelaAtualizacao);

    const bingo = cartela.find(element => element.marked === false);
    if (bingo === undefined)
      Alert.alert("BIMGO!!!!!", "Você Ganhou!!!!");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>BINGO!!!</Text>
      <Cartela cartela={cartela} />
      <Sorteio cartela={cartela} markNumber={markNumber} salvarNumero={(numerosBingo) => salvarNumero(numerosBingo)} />
      <FAB
        icon="information-outline"
        style={styles.fab}
        onPress={() => setVisibleModal(true)}
      />
      <Modal
                visible={visibleModal}
                onDismiss={hideModal}
                contentContainerStyle={styles.containerStyle}
            >
                <NumerosSorteados numerosSorteados={numerosSorteados} />
            </Modal>
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
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 30,
    backgroundColor: "#1c1c1c",
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
},
});
