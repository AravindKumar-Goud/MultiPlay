import React from 'react'
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity,ScrollView,KeyboardAvoidingView,Platform, TextInput } from "react-native";
import Video from 'react-native-video';


function VideoPlay({route}) {
    const {path,name}=route.params

  return (
<View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
    <Text>{name}</Text>
    <View>
  
    <Video
    source={path}
    style={{ width:350, height: 250 }}
    controls={true}
    // resizeMode="cover"
    fullscreen={true}
    
    
 />
</View>
</View>
  )
}

export default VideoPlay