import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import Settings from './Settings'
import Chat from './Chat';
import LoginScreen from './LoginScreen';
import {MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarInactiveTintColor:'gray',
            tabBarActiveTintColor:'red',
            tabBarActiveBackgroudcolor:'purple'
           
        
        }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:()=>(<MaterialIcons name="home" size="22" color="black"/>)
      }}/>
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon:()=>(<MaterialIcons name="Settings" size="22" color="black"/>)
      }}/>
      <Tab.Screen name="Chat" component={Chat} options={{
        tabBarIcon:()=>(<MaterialIcons name="home" size="22" color="black"/>)
      }}/>
      <Tab.Screen name="Login" component={LoginScreen} options={{
        tabBarIcon:()=>(<MaterialIcons name="home" size="22" color="black"/>)
      }}/>
    </Tab.Navigator>
  );
}