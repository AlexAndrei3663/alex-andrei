import { Fragment, useState } from "react"
import { Text, TextInput, Keyboard, Pressable, StyleSheet, TouchableOpacity, View, Vibration } from "react-native"
import { submitService } from "../services/submitService"

export default function Formulario(props) {
    const [pergunta, setPergunta] = useState(null)
    const [resposta, setResposta] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const submit = () => {
        const response = submitService({pergunta,resposta})
        if(response){
            props.listItens()
        }
    }
    const onSubmitForm = async () => {
        if(pergunta != null && resposta != null){
            Keyboard.dismiss()
            setPergunta(null)
            setResposta(null)
            setErrorMessage(null)
            submit()
        }
        else{
            setErrorMessage("Campo Obrigatório")
            Vibration.vibrate()
        }
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulário de Perguntas</Text>
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Fragment>
                    <Text style={styles.formLabel}>Pergunta</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPergunta}
                        value={pergunta}
                        placeholder="Ex: Qual o melhor time?"
                        keyboardType="ascii-capable"
                    />
                    <Text style={styles.formLabel}>Resposta</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setResposta}
                        value={resposta}
                        placeholder="Ex: Flamengo"
                        keyboardType="ascii-capable"
                    />
                    <TouchableOpacity
                        style={styles.buttonForm}
                        onPress={onSubmitForm }
                    >
                        <Text style={styles.textButtonForm}>Enviar Pergunta</Text>
                    </TouchableOpacity>
                </Fragment>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 10,
    },
    titulo: {
        color: "#ff0043",
        fontSize: 24,
        fontWeight: 'bold',
    },
    form: {
        width: "100%",
        height: "auto",
        backgroundColor: "#fff",
        padding: 10,

    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonForm: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingVertical: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonForm: {
        fontSize: 20,
        color: "#fff",

    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: "bold",
        paddingLeft: 20,
        }
})