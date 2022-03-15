import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Questoes(props) {
    const [random, setRandom] = useState(Math.floor(Math.random() * props.questoes.length))
    const [questao, setQuestao] = useState(props.questoes[random])
    const [exibir, setExibir] = useState(false)

    const mudarPergunta = () => {
        setRandom(Math.floor(Math.random() * props.questoes.length))
        setQuestao(props.questoes[random])
        setExibir(false)       
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Teste de conhecimento</Text>

            <Text style={styles.pergunta}>{questao.pergunta}</Text>
            <Text style={styles.resposta}>{exibir?questao.resposta:""}</Text>

            <Button title="Mudar pergunta" onPress={mudarPergunta}/>
            <Button 
                style={styles.button}
                title={exibir?"Ocultar Resposta":"Mostrar resposta"}  
                onPress={() => setExibir(!exibir)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 15,
    },
    titulo: {
        textAlign: "center",
        borderRadius: 20,
        borderWidth: 2,
        marginHorizontal: 10,
        fontSize: 48,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginVertical: 48,
    },
    pergunta: {
        fontSize: 36,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: 'black',
    },
    resposta: {
        fontSize: 24,
        textAlign: "center",
        color: 'black',
        marginVertical: 36,
    },
    button: {
        paddingHorizontal: 25,
    }
})