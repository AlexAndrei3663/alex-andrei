import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Pressable } from 'react-native';
import NumerosSorteados from './NumerosSorteados';

// Gera um array com os valores do bingo
let numerosBingo = [];
for (let index = 1; index <= 60; index++) {
  numerosBingo.push(index);
}

export default function Sorteio(props) {
    const [currentNumber, setCurrentNumber] = useState("Sortear Número");
    const [sortedNUmbers, setSortedNumbers] = useState([]);

    const onPressDraw = () => {
        if(numerosBingo.length<1){
            Alert.alert("Sem números para sortear");
            return;   
        }
        
        const indexNumero = Math.floor(Math.random() * numerosBingo.length);

        const valid = props.cartela.find(element => numerosBingo[indexNumero] === element.number);
        if (valid != undefined) {
            Alert.alert("Seu número foi sorteado", "Número: " + valid.number);
            props.markNumber(props.cartela.indexOf(valid));
        }
        setCurrentNumber(String(numerosBingo[indexNumero]));

        setSortedNumbers([...sortedNUmbers, numerosBingo.splice(indexNumero, 1)]);

        
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPressDraw}>
                <Text style={styles.text}>{currentNumber < 10 ? "0" + String(currentNumber) : currentNumber}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 64,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#191970',
    },
    text: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});