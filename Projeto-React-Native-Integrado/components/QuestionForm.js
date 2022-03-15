import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FAB, Modal } from 'react-native-paper'
import Formulario from '../forms/Formulario'
import { listService } from '../services/listService'
import Listagem from './Listagem'

export default function QuestionForm() {
    const [questoes, setQuestoes] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)

    // Controle do Modal
    const hideModal = () => setVisibleModal(false)

    const listItens = async () => {
        const questoes = await listService()
        if (questoes){
            setRefresh(!refresh)
            setQuestoes(questoes.data.data)
        }
    }

    useEffect(() => {
        listItens()
    }, [])

    return (
        <View style={styles.container}>
            <Formulario listItens={() => { listItens() }} />
            <FAB
                icon="menu"
                style={styles.fab}
                onPress={() => setVisibleModal(true)}
            />
            <Modal
                visible={visibleModal}
                onDismiss={hideModal}
                contentContainerStyle={styles.containerStyle}
            >
                <Listagem questoes={questoes} refresh={refresh}/>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#e0e5e5',
    },
    fab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "#d00",
    },
    containerStyle: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        flex: 0.7,
        justifyContent: 'center',
        borderRadius: 25,
    },
})