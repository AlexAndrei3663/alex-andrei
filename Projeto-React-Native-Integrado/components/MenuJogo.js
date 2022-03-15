import { Button, StyleSheet, Text, View } from 'react-native'


export default function MenuJogo({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo} >Você gostaria de um jogo?</Text>
            <Button title="Jogo" onPress={() => navigation.navigate('Jogo de Perguntas')} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 42,
        textAlign: 'center',
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginVertical: 48,
    },
})