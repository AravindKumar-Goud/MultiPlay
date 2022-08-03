import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Styles } from './Styles';





const AudioList = ({navigation,route}) => {

  const audioList=[{name:"kesariya",file:"kesariya",url:"https://www.theindianwire.com/wp-content/uploads/2022/07/Kesariya-1024x576.jpg"},
{name:"shayad",file:"shayad",url:"https://sdlhivkcdnems02.cdnsrv.jio.com/c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg"},
{name:"srivalli",file:"srivalli",url:"https://i.scdn.co/image/ab67616d0000b273b53d8029dc2d52bd0384d922"},
{name:"Dhakho song",file:"song2",url:"https://www.telugubulletin.com/wp-content/uploads/2021/08/Pushp.jpg"},
{name:"rara rakkamma",file:"song1",url:"https://static.toiimg.com/photo/91988306.cms"}]

const play=(item)=>{
  navigation.navigate("play",{fileName:item.file,img:item.url,song:item.name})
}

const render=({item})=>{return(
  <TouchableOpacity onPress={()=>play(item)}>
  <View style={Styles.musicl}>
    <Image style={{height:100,width:100,margin:5}}
    source={{uri:`${item.url}`}}/>
    <View>
    <Text style={{color:"blue",fontSize:25}}>{item.name}</Text>

    </View>
    
    <FontAwesome5 name="music" size={28} color="purple"/>
    
  </View></TouchableOpacity>)
}
  return (
    <SafeAreaView>
      <FlatList
      data={audioList}
      renderItem={render}/>
    </SafeAreaView>
  )
}

export default AudioList