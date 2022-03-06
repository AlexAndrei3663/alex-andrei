import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Questionario from './Questionario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro projeto!</Text>
      <Questionario pergunta="Qual a melhor sobremesa?" resposta="Pavê" />
      <StatusBar style="auto" />
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
});
