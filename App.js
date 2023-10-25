
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Chat from './components/Chat';
import MyTabs from './components/Mytabs';
import Settings from './components/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Mytabs'
      >
        <Stack.Screen name="Mytabs" component={MyTabs} options={{title:'Menu'}}/>
        <Stack.Screen name="Login" component={LoginScreen}options={{title:'Inicio de Seccion'}}/>
        <Stack.Screen name="Home" component={HomeScreen}options={{title:'pantalla Principal'}}/>
        <Stack.Screen name="Chat" component={HomeScreen} options={{title:'chat'}}/>
        <Stack.Screen name="Settings" component={Settings} options={{title:'Configuraciones'}}/>
              </Stack.Navigator>
    </NavigationContainer>
    
  );
}


