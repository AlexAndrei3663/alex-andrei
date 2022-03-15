import { Button, StyleSheet, View } from 'react-native'
import Questoes from './Questoes'

export default function Jogo({ navigation }) {

  let questoes = [
    {
      pergunta: "Qual bicho transmite Doença de Chagas?",
      resposta: "Barbeiro"
    },
    {
      pergunta: "Qual fruto é conhecido no Norte e Nordeste como jerimum?",
      resposta: "Abóbora"
    },
    {
      pergunta: "Qual é o coletivo de cães?",
      resposta: "Matilha"
    },
    {
      pergunta: "Qual é o triângulo que tem todos os lados diferentes?",
      resposta: "Escaleno"
    },
    {
      pergunta: "Quem compôs o Hino da Independência?",
      resposta: "Dom Pedro I"
    },
    {
      pergunta: "Qual é o antônimo de malograr?",
      resposta: "Conseguir"
    },
    {
      pergunta: "Em que país nasceu Carmem Miranda?",
      resposta: "Portugal"
    },
    {
      pergunta: "Qual foi o último Presidente do período da ditadura militar no Brasil?",
      resposta: "João Figueiredo"
    },
    {
      pergunta: "Seguindo a sequência do baralho, qual carta vem depois do dez?",
      resposta: "Valete"
    },
    {
      pergunta: "O adjetivo venoso está relacionado a:",
      resposta: "Veia"
    },
    {
      pergunta: "Que nome se dá à purificação por meio da água?",
      resposta: "Ablução"
    },
    {
      pergunta: "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
      resposta: "Monte Everest"
    },
    {
      pergunta: "Em que parte do corpo se encontra a epiglote?",
      resposta: "Boca"
    },
    {
      pergunta: "A compensação por perda é chamada de...",
      resposta: "Indenização"
    }
  ]

  return (
    <View style={styles.container}>
      <Questoes questoes={questoes} />
      <Button title="Voltar ao Menu" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})