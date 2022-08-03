import { View, Text, TextInput,TouchableOpacity,Clipboard} from 'react-native'
import React ,{useState}from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Styles } from './Styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Yvideo = ({navigation}) => {
    const [input,setInput]=useState("")
    const [copiedText, setCopiedText] = useState('')
    const [PlayVid,setPlay]=useState(false)
    const handler1=(e)=>{
        setInput(e)
        console.log(input)

    }
    const Play=()=>{
      navigation.navigate("yvideoPlay",{videoId:input})
        setPlay(true)
        
    }
    

  
  return (
      <>
      <View style={Styles.boxinput}>
      <TextInput
       style={Styles.a}
      onChangeText={handler1}
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
    
     
</>
  )
}

export default Yvideo