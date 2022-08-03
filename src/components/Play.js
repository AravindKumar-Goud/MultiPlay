import { View, Text,Image, TouchableOpacity, Slider, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Sound from 'react-native-sound'
import { Styles } from './Styles'
import { context } from './HomeStack'


const Play = ({route}) => {
    const currsong=useContext(context)
    const {csong,setSong} =currsong
    const {fileName,img,song}=route.params
    const [ply,setPly]=useState(false)
    const [music, setMusic] = useState(null)
    const [position,setposition]=useState(0)

    useEffect(()=>{
        if(csong!==null){
            csong.release()
        }
    const APlay =() =>{
        let player = new Sound(`${fileName}.mp3`, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            player.play((success) =>{
                console.log('end', success)
            })
            console.log('duration in seconds: ' + player.getDuration() + 'number of channels: ' + player.getNumberOfChannels())
            
        })
        setMusic(player)
        setSong(player)
    }
    APlay()
    
},[])

const Play=()=>{
    music?.play()
    setPly(!ply)
}
   const a=()=>{
    music?.getCurrentTime((seconds) => {setposition(seconds),console.log('at ' + seconds)});
   }

    
    const farward=()=>{
        music.getCurrentTime((seconds)=>{
            console.log(seconds);
            music.setCurrentTime(seconds+10)
        })

    }
    const backward=()=>{
        music.getCurrentTime((seconds)=>{
            console.log(seconds);
            music.setCurrentTime(seconds-10)
        })

    }


  return (

    <ImageBackground style={{flex:1}} source={require('../assets/sky.jpeg')}>
        <View style={{alignSelf:"center"}}>
        <Image style={{height:300,width:250,borderRadius:20,marginTop:30}}
      source={{uri:`${img}`}}/>
      <Text style={{marginTop:10,textAlign:"center",fontSize:25,color:"black"}}>song : {song}</Text>
        </View>
        <View style={{alignSelf:"center"}}>
            {/* <Slider
            style={{height:40,width:250}}
            minimumValue={0}
            maximumValue={music?.getDuration()}
            value={0}
            /> */}

            
        </View>
        <View style={[Styles.musicl,{ alignSelf:"center",marginTop:40,height:100,width:250,borderRadius:20}]}>
       <TouchableOpacity onPress={backward}>
       <FontAwesome5 name="fast-backward" color="blue" size={40}/>

       </TouchableOpacity>
        


            {ply
            ?<TouchableOpacity onPress={()=>Play()}><FontAwesome5 name="play-circle" size={50} color="blue"/></TouchableOpacity>:
            <TouchableOpacity onPress={()=>{music.pause(),setPly(!ply)}}><FontAwesome5 name="pause-circle" size={50} color="blue"/></TouchableOpacity>
            
            
            }
                
            <TouchableOpacity onPress={farward}>
            <FontAwesome5 name="fast-forward" color="blue" size={40}/>

            </TouchableOpacity>
            
          
        </View>
      
    </ImageBackground>
  )
}

export default Play