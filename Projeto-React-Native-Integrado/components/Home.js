import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Bingo from "./Bingo"
import Componentes from "./Componentes"
import HomeJogo from "./HomeJogo"
import Produtos from "./Produtos"
import QuestionForm from "./QuestionForm"

const Tab = createBottomTabNavigator()

export default function HomeScreen() {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Componente') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline'
          }
          else if (route.name === 'Produtos') {
            iconName = focused
              ? 'basket'
              : 'basket-outline'
          }
          else if (route.name === 'Jogo') {
            iconName = focused
              ? 'game-controller'
              : 'game-controller-outline'
          }
          else if (route.name === 'Bingo') {
            iconName = focused
              ? 'md-apps-sharp'
              : 'md-apps-outline'
          }
          else if (route.name === 'Formulario') {
            iconName = focused
              ? 'create'
              : 'create-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
      >
      <Tab.Screen name="Componente" component={Componentes} />
      <Tab.Screen name="Produtos" component={Produtos} />
      <Tab.Screen name="Jogo" component={HomeJogo} />
      <Tab.Screen name="Bingo" component={Bingo} />
      <Tab.Screen name="Formulario" component={QuestionForm} />
    </Tab.Navigator>
  )
}