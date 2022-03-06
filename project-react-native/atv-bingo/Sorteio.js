import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Alert, Button, Pressable } from 'react-native';

// Falta criar um array para definir os números que já saíram

export default function Sorteio(props) {
    const [sortedNUmber, setSortedNumber] = useState("Sortear Número");

    onPressDraw = () => {
        const random = Math.ceil(Math.random() * 60);
        const valid = props.cartela.find(element => random===element.number);
        if (valid != undefined){
            Alert.alert("Seu número foi sorteado", "Número: " + random);
            props.markNumber(valid.key);
        }
        setSortedNumber(String(random));
    };

    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={onPressDraw}>
            <Text style={styles.text}>{sortedNUmber<10 ? "0"+String(sortedNUmber) : sortedNUmber}</Text>
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