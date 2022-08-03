import { View, Text } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe'


const YoutubevideoPlay = ({route}) => {
    const {videoId}=route.params
  return (
    <View>
      <YoutubePlayer
    
    height="100%"
    play={true}
    videoId={`${videoId}`}
  />
    </View>
  )
}

export default YoutubevideoPlay