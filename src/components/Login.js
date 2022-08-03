import { View, Text,TextInput,TouchableOpacity,Alert } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import React from 'react'
import { Styles } from './Styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getState } from '../redux/Action';

const Login = ({navigation}) => {
    const dispatch=useDispatch()
    const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [p, setP]=useState(true);
  
  const handler1=(event)=>{
    setEmail(event)

  }
  const handler2=(event)=>{
    setPassword(event)

  }
  const press=()=>{
    setP(!p)

  }
  const login1=()=>{
    if (email !=="" && password !==""){
      auth().signInWithEmailAndPassword(email,password)
      .then((res) => {
        dispatch(getState(res.user.uid,res.user.email))

        
        console.log(res.user.uid,res.user.email)

      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('wrong password');
        }
    
        if (error.code === 'auth/user-not-found') {
          Alert.alert('user is not found');
        }
        else{
          Alert.alert(error.code)
          console.log(error)
        }

    
      });}else if (email ==""){
        Alert.alert("Please fill the Email field")
      }else{
        Alert.alert("Please fill the password field")
      }

   
    
    
  }
  const signUp=()=>{
      navigation.navigate("registration")
  }
  return (
    <>
    <View >
      <Text style={Styles.login}>Login</Text>
      <Text style={Styles.inputHead}>Gmail</Text>
      <TextInput
      style={Styles.inputa}
      onChangeText={handler1}
      placeholder="Enter Gmail"
      />
      <Text style={Styles.inputHead}>Password</Text>
      <View style={Styles.boxinput}>
      <TextInput
      style={Styles.a}
      onChangeText={handler2}
      placeholder="Enter the password"
      secureTextEntry={p}     
      />
       <TouchableOpacity onPress={press}>
      <FontAwesome5 name="eye" size={20}/>

      </TouchableOpacity>
      

      </View>
      

      <TouchableOpacity onPress={login1}>
          <View style={Styles.loginButton}>
          <Text style={Styles.text}>
          Login

          </Text>
            
        

          </View>
          
      </TouchableOpacity>
      <TouchableOpacity onPress={signUp}> 
      <Text style={{margin:15,textAlign:"center",fontSize:20}}>Don't have an account?  <Text style={{color:"blue",fontWeight:"bold"}}>SignUp <FontAwesome5 name="sign-in-alt" size={22}/></Text></Text> 
      </TouchableOpacity>
    </View>

    
   
    </>
  )
}

export default Login