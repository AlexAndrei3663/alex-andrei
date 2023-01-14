import { Pressable, StyleSheet, Text, View } from "react-native"
import Produtos from "./Produtos";
import CarrinhoCompras from "./CarrinhoCompras";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="CarrinhoDeCompras" component={CarrinhoCompras} />
    </Tab.Navigator>
  )
}

/*<View style={styles.container}>
<Text style={styles.text} >Home Screen</Text>

<Pressable style={styles.button} onPress={() => navigation.push('Produtos')}>
  <Text style={styles.button_text}>Ver produtos</Text>
</Pressable>
<Pressable style={styles.button} onPress={() => navigation.push('CarrinhoDeCompras')}>
  <Text style={styles.button_text}>Carrinho de Compras</Text>
</Pressable>
</View>
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 48,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#191970',
    marginVertical: 15,
  },
  button_text: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 42,
    lineHeight: 42,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginVertical: 48,
  },
})