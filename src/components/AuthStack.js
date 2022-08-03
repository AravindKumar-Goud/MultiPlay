import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login';
import Regi from './Regi';



const Auth=createNativeStackNavigator();
const AuthStack = () => {
  return (
    <>
    <Auth.Navigator>
        <Auth.Screen name="login" component={Login}/>
        <Auth.Screen name="registration" component={Regi}/>
    </Auth.Navigator>
      
    </>
  )
}

export default AuthStack