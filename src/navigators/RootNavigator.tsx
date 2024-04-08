
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Root' >
        <Stack.Screen name="Root" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator> 
  )
}

export default RootNavigator