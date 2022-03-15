import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Jogo from "./Jogo"
import MenuJogo from './MenuJogo'

Stack = createNativeStackNavigator()

export default function HomeJogo() {

    return (
        <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={MenuJogo} />
            <Stack.Screen name="Jogo de Perguntas" component={Jogo} />
        </Stack.Navigator>
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