import { Button, Text, View } from "react-native";

export default function OutraRota({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Outra Rota</Text>
        <Button title="Voltar para a home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
}