import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

import Quan from './Quan';
import Love from './src/Love';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <TailwindProvider>
    
   <HomeScreen/>
    </TailwindProvider>
  );
}


