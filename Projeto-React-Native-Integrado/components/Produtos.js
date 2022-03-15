import { useState } from "react"
import { Alert, FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import { FAB, Modal, Portal, Text } from "react-native-paper"
import CarrinhoCompras from "./CarrinhoCompras"

export default function Produtos() {
    const [carrinho, setCarrinho] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [fabState, setFabState] = useState({ open: false })
    const [count, setCount] = useState(5)
    const [estoque, setEstoque] = useState([
        {
            id: 1,
            nome: "TV",
            qtde: 10
        },
        {
            id: 2,
            nome: "Notebook",
            qtde: 10
        },
        {
            id: 3,
            nome: "Celular",
            qtde: 10
        }
    ])

    // Reinicia os Produtos 
    const reporEstoque = () => {
        setEstoque([
            {
                id: 1,
                nome: "TV",
                qtde: 10
            },
            {
                id: 2,
                nome: "Notebook",
                qtde: 10
            },
            {
                id: 3,
                nome: "Celular",
                qtde: 10
            }
        ])
    }

    // Controle do Modal
    const hideModal = () => setVisibleModal(false)

    // Controle FAB
    const onStateChange = ({ open }) => setFabState({ open })
    const { open } = fabState

    const adicionarProdutoCarrinho = produto => {
        if (produto.qtde > 0) {
            // remove o produto do estoque
            produto.qtde -= 1
            setEstoque(estoque.fill(
                produto,
                estoque.indexOf(produto),
                estoque.indexOf(produto) + 1
            ))

            // Adiciona produto no carrinho
            // Verifica se produto já existe no carrinho
            const produtoExiste = carrinho.find(prod => prod.nome === produto.nome)
            if (produtoExiste != undefined) {
                // Adiciona mais um ao produto existente
                produtoExiste.qtde += 1
                setCarrinho(carrinho.fill(
                    produtoExiste,
                    carrinho.indexOf(produtoExiste),
                    carrinho.indexOf(produtoExiste) + 1
                ))
            } else {
                // Cria um novo produto no carrinho
                setCarrinho((arr) => [...arr, {
                    id: count,
                    nome: produto.nome,
                    qtde: 1
                }])
                setCount(count + 1)
            }
        } else {
            // Não existe mais produto em estoque
            Alert.alert("Produto fora de estoque")
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                adicionarProdutoCarrinho(item)
                setRefresh(!refresh)
            }}
        >
            <Text style={styles.produto}>{item.nome}</Text>
            <Text style={styles.quantidade}>
                {item.qtde < 10 ? "0" + String(item.qtde) : item.qtde}
            </Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} >Estoque</Text>
            <FlatList
                data={estoque}
                renderItem={renderItem}
                keyExtractor={(item) => ( item.id )}
                extraData={refresh}
            />
            <FAB.Group
                open={open}
                onStateChange={onStateChange}
                icon="plus"
                style={styles.fab}
                fabStyle={styles.fabStyle}
                actions={[
                    {
                        icon: 'reload',
                        label: 'Repor Estoque',
                        onPress: reporEstoque,
                        small: false,
                    },
                    {
                        icon: 'cart',
                        label: 'Carrinho',
                        onPress: () => setVisibleModal(true),
                        small: false,
                    },
                ]}
            />
            <Modal
                visible={visibleModal}
                onDismiss={hideModal}
                contentContainerStyle={styles.containerStyle}
            >
                <CarrinhoCompras carrinho={carrinho} />
            </Modal>
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
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 8,
        alignContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 48,
        elevation: 3,
    },
    produto: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 24,
    },
    quantidade: {
        fontSize: 36,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
        marginLeft: 24,
    },
    titulo: {
        fontSize: 42,
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        marginVertical: 48,
    },
    fab: {
        paddingBottom: 10,
        paddingRight: 10,
    },
    fabStyle: {
        backgroundColor: "#d00",
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
})