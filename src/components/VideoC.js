import { View, Text,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory'
import { Styles } from './Styles'

const VideoC = ({navigation}) => {
  return (
    <ImageBackground source={{uri:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29sb3IlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("videolist")}>
      <View style={Styles.videoBox} >
        <Text>Normal Videos</Text>
      </View>

      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>navigation.navigate("yvideo")}>
      <View style={Styles.videoBox}>
        <Text>Youtube Videos</Text>
      </View>

      </TouchableOpacity>
      

    </ImageBackground>
  )
} 

export default VideoC