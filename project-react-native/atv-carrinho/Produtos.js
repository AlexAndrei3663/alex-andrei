import { useLayoutEffect, useState } from 'react'
import { Alert, FlatList, Pressable, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Appbar, Button, List } from 'react-native-paper'

const estoqueInicial = [
    {
        key: "1",
        produto: "TV",
        qtde: 10
    },
    {
        key: "2",
        produto: "Notebook",
        qtde: 10
    },
    {
        key: "3",
        produto: "Celular",
        qtde: 10
    }
]


export default function Produtos({ navigation }) {
    const [estoque, setEstoque] = useState(estoqueInicial)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Appbar.Action icon="autorenew" onPress={() => setEstoque(estoqueInicial)} />
            ),
        })
    }, [navigation, setEstoque])

    const removerProduto = produto => {
        console.log(produto)
        if (produto.qtde > 0) {
            produto.qtde -= 1
            setEstoque(estoque.fill(
                produto,
                estoque.indexOf(produto),
                estoque.indexOf(produto) + 1
            ))
            // criar chamada da função para adicionar produto no carrinho
        } else {
            console.log(produto)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} >Estoque</Text>

            {estoque.map((produto, index) => {
                <View style={styles.item}>
                    <TouchableHighlight key={index} onPress={() => removerProduto(produto)}>
                        <Text style={styles.produto}>{produto.produto}</Text>
                    </TouchableHighlight>
                    <Text style={styles.quantidade}>{produto.qtde < 10 ? "0" + String(produto.qtde) : produto.qtde}</Text>
                </View>
            })}
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
    item: {
        backgroundColor: '#000',
        flexDirection: 'row',
        padding: 15,
        justifyContent: "space-between",
        marginVertical: 8,
    },
    produto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 24,
    },
    quantidade: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
        marginHorizontal: 24,
    },
    titulo: {
        fontSize: 42,
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginVertical: 48,
    },
})