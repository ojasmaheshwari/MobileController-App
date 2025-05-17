import { GamepadScreen } from "@/screens/Gamepad";
import { HomeScreen } from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "../../global.css";

export type RootStackParamList = {
  Home: undefined;
  Gamepad: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Gamepad" component={GamepadScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
