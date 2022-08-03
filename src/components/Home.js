import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ClearState } from '../redux/Action'
import { Styles } from './Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = ({navigation}) => {
    const dispatch=useDispatch()
  return (
    <ImageBackground style={{flex:1,justifyContent:"center"}}
    source={{uri:"https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}}>
        <TouchableOpacity onPress={()=>dispatch(ClearState(""))}>
        <Text>Home</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("AudioList")}>
            <View style={Styles.box}>
                <Text style={{fontSize:25}}>Audio</Text>
                <FontAwesome5 name="music" size={30} color="purple"/>
            </View>

            </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("videochoose")}>
           <View style={Styles.box}>
                <Text style={{fontSize:25}} >Video</Text>
                <FontAwesome5 name="video" size={30} color="purple"/>
            </View>

           </TouchableOpacity>
            
        </View>

      
    </ImageBackground>
  )
}

export default Home

