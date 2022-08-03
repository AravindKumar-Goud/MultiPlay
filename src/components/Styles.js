import {StyleSheet} from 'react-native'



export const Styles= StyleSheet.create({
    loginBox:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
       
    },
    button:{
       borderWidth:2,
       borderColor:"blue",
        borderRadius:5,
        marginTop:10,
        margin:15,
        alignSelf:'flex-end'
    },
    inputa: {
        height: 45,
        // width:300,
        alignSelf: 'stretch',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        borderColor:"purple"
      },
      login:{
        fontWeight:'bold',
        fontSize:40,
        color:"purple",
        margin:5,
        marginBottom:40
      }, 
      item: {
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: 'lightblue',
        padding: 20,
        marginVertical: 8,
        fontSize: 26,
        marginHorizontal: 16,
        borderRadius:10,
        alignItems:"center"
      },
      image:{
          height:80,
          width:80,
          borderRadius:40
      },
      s:{
        flex:1,
        alignSelf:'flex-end',
        width:100,
        margin:20,
        textAlign:'right',
         
      },
      
      e:{
          marginLeft:10,
          alignSelf:"flex-start",
          
      },
      loginButton:{
          height:40,
          width:120,
        alignSelf:"center",
        backgroundColor:"purple",
        borderRadius:5,
        paddingTop:5,
        marginTop:15,
        
          
      }
      ,
      text:{
          textAlign:"center",
          color:"white",
          fontSize:20,

      },
      inputHead:{
        color:"blue",
        fontSize:20,
        marginLeft:10,
        marginTop:25


      },
      boxinput:{
        height: 45,
        // width:300,
        alignSelf: 'stretch',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingBottom:10,
        borderRadius:10,
        borderColor:"purple",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      a:{
        width:"90%",
        height:45,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      imageM:{
        height:200,
        width:"100%",
        borderRadius:12,
        marginBottom:10,
        
        
       
    },
    profile:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
     alignItems:"center",
     margin:10
    },
    box:{
        height:150,
        width:150,
        backgroundColor:"lightblue",
        margin:10,
        justifyContent:"center",
        alignItems:"center"

    },
    musicl:{
      flexDirection:"row",
      backgroundColor:"lightyellow",
      margin:10,
      justifyContent:"space-around",
      alignItems:"center",
      borderWidth:3,
      borderColor:"purple"
    },
    videoBox:{backgroundColor:"skyblue",
    height:70,
    width:200,
    alignItems:"center",
    justifyContent:"center",
    margin:10,
    borderWidth:2,borderColor:"purple",borderRadius:10
  }

      
})