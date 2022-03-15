import { FlatList, Keyboard, StyleSheet, Text, View } from "react-native";

export default function Listagem(props) {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.pergunta}>{item.pergunta}</Text>
            <Text style={styles.resposta}>{item.resposta}</Text>
        </View>
    )
    

    return (
        <View style={styles.container} >
            <Text style={styles.titulo} >Lista de Perguntas</Text>
            <FlatList
                data={props.questoes}
                renderItem={renderItem}
                extraData={props.refresh}
                keyExtractor={(item) => ( item.id )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 20,
    },
    titulo: {
        color: "#ff0043",
        alignSelf: "center",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    item: {
        borderRadius: 25,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 8,
        marginHorizontal: 15,
        alignContent: "center",
        paddingVertical: 18,
        paddingHorizontal: 12,
        elevation: 3,
    },
    pergunta: {
        width: "45%",
        textAlign: "justify",
        paddingRight: 5,
    },
    resposta: {
        width: "45%",
        textAlign: "justify",
        paddingLeft: 5,
    },
})