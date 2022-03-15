import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function CarrinhoCompras(props) {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.produto}>{item.nome}</Text>
            <Text style={styles.quantidade}>
                {item.qtde < 10 ? "0" + String(item.qtde) : item.qtde}
            </Text>
        </View>
    )

    return (
        <>
            <Text style={styles.titulo} >Carrinho de compras</Text>
            <FlatList
                data={props.carrinho}
                renderItem={renderItem}
                keyExtractor={(item) => ( item.id )}
            />
        </>

    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginVertical: 48,
    },
    item: {
        borderRadius: 25,
        alignItems: 'center',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: 2,
        flexDirection: 'row',
        padding: 15,
        justifyContent: "space-between",
        marginVertical: 8,
        alignContent: "center"
    },
    produto: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 24,
    },
    quantidade: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginLeft: 24,
    },
});