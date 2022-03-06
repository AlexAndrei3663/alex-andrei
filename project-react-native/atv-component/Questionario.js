import React, { useState } from "react"
import { Alert, Button, Text, View } from "react-native";

export default function Questionario(props) {

    const [exibir, setExibir] = useState(false);

    return (
        <View style={{alignItems: 'center'}}>
            <Text>{props.pergunta}</Text>
            {exibir === false && 
                <Button 
                    onPress={() => setExibir(true)}
                    title= "Mostrar Resposta"
                /> 
            }
            {exibir === true && 
                <Button 
                    onPress={() => setExibir(false)}
                    title= "Ocultar Resposta"
                />
            }
            {exibir === true && 
                <Text>{props.resposta}</Text>
            }
        </View>
    )
}