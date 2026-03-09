import HomeScreen from "../screens/HomeScreen";
import EditScreen from "../screens/EditScreen";
import AddScreen from "../screens/AddScreen";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}