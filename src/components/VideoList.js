import { View, Text,TouchableOpacity,SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native'

const VideoList = ({navigation}) => {
    const List=[{
        path:require("../assets/dna.mp4"),
        name:"Dna"
    },{
        path:require("../assets/virus.mp4"),
        name:"virus"
    },{
        path:require("../assets/kunfu.mp4"),
        name:"kunfu panda adventure"
    }

]
const render=({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate("videoplay",{path:item.path,name:item.name})}>
    <View style={Styles.musicl}>
      {/* <Image style={{height:100,width:100,margin:5}}
      source={{uri:`${item.}`}}/>*/}
   <View> 
      <Text style={{color:"blue",fontSize:25}}>{item.name}</Text>
  
      </View>
      
      <FontAwesome5 name="video" size={28} color="purple"/>
      
    </View></TouchableOpacity>)
  }
  return (
    <SafeAreaView>
    <FlatList
    data={List}
    renderItem={render}/>
  </SafeAreaView>
  )
}

export default VideoList