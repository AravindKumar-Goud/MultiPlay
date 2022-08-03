import { View, Text } from 'react-native'
import React, { useContext,createContext,useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import AudioList from './AudioList'
import VideoC from './VideoC'
import Play from './Play'
import VideoList from './VideoList'
import VideoPlay from './VideoPlay'
import Yvideo from './Yvideo'
import YoutubevideoPlay from './YoutubevideoPlay'


const stack=createNativeStackNavigator()
export const context=createContext()
const HomeStack = () => {
  const [csong,setSong]=useState(null)
  return (
    <context.Provider value={{csong,setSong}}>
   <stack.Navigator>
     
     <stack.Screen name="home" component={Home}/>
       <stack.Screen name="AudioList" component={AudioList}/>
       <stack.Screen name="play" component={Play}/>
      
      
       
       <stack.Screen name="videochoose" component={VideoC}/>
       <stack.Screen name="videolist" component={VideoList}/>
       <stack.Screen name="videoplay" component={VideoPlay}/>
       <stack.Screen name="yvideo" component={Yvideo}/>
       <stack.Screen name="yvideoPlay" component={YoutubevideoPlay}/>
   </stack.Navigator>
   </context.Provider>
  )
}

export default HomeStack