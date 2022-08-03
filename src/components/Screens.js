import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'
import Home from './Home'
import HomeStack from './HomeStack'

const Screens = () => {
    const state=useSelector(state=>state)
  return (
    <NavigationContainer>
{state.istate?<HomeStack/>:<AuthStack/>}
        
    </NavigationContainer>
      
  )
}

export default Screens