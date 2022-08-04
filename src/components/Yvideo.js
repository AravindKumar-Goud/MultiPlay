import { View, Text, TextInput,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Styles } from './Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Clipboard from '@react-native-clipboard/clipboard'



const Yvideo = ({navigation}) => {
    const [input,setInput]=useState("")
    
    const handler1=(e)=>{
        setInput(e)
        console.log(input)

    }
    const copyToClipboard = () => {
      Clipboard.setString('hello world')
    }

    const Play=()=>{
      navigation.navigate("yvideoPlay",{videoId:input})
        setPlay(true)
        

    }

    const fetchCopiedText = async () => {
      const text = await Clipboard.getString()
      setInput(text)
    }


    

  
  return (
      <>
      <View style={Styles.boxinput}>
      <TextInput
       style={Styles.a}
      onChangeText={handler1}
      value={input}
      placeholder="Enter youtube videoId"
      
      />
      <TouchableOpacity onPress={Play}>
      <FontAwesome5 name="search" size={20} color="blue"/>

      </TouchableOpacity>
        </View>
      <TouchableOpacity onPress={Play}>
          <View style={[Styles.loginButton,{marginBottom:20}]}>
          <Text style={Styles.text}>
          Play
          </Text>
          </View>
          
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>fetchCopiedText}>
          <View style={[Styles.loginButton,{marginBottom:20}]}>
          <Text style={Styles.text}>
          paste
          </Text>
          </View>
          
      </TouchableOpacity>
    
     
</>
  )
}

export default Yvideo