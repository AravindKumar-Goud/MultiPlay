import { View, Text, TextInput,TouchableOpacity,ScrollView, Alert } from 'react-native'
import React,{useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Styles } from './Styles'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { getState } from '../redux/Action';

const Regi = () => {
    const dispatch=useDispatch()
    const [p,setP]=useState(true)
    const [q,setq]=useState(true)
    const [name,setName]=useState("")
    const [gmail,setGmail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("") 
 
    const userNameFunc=(e)=>{
        setName(e)
    }
    const userMailFunc=(e)=>{
        setGmail(e)
    }
    const userPasswordFunc=(e)=>{
        setPassword(e)
    }
    const press1=()=>{
        setP(!p)
    }
    const press=()=>{
        setq(!q)
    }
    const conPasswordFunc=(e)=>{
        setCpassword(e)

    }
    const signUp=()=>{
        if (name!=""&& gmail!="" &&password!=""){
            auth()
            .createUserWithEmailAndPassword(gmail,password)
            .then((res) => {
                dispatch(getState(res.user.uid,res.user.email))
                console.log(res.user.uid,res.user.email);})
            .catch(error => {    
        if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!'); }
      if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');}console.log(error)
      
     

   
  });

        }
        else if(password!==cpassword ){
            Alert.alert("password did not match")
        }
        else{
            Alert.alert("fill the empty field")
        }

    }

  return (
    <>
    <ScrollView >
        <Text style={[Styles.login,{ marginBottom:10}]}>Registration</Text>
        <Text style={Styles.inputHead}>UserName</Text>
        <TextInput
      style={Styles.inputa}
      onChangeText={userNameFunc}
      placeholder="Enter Username"
      />
      <Text style={Styles.inputHead}>Gmail</Text>
        <TextInput
      style={Styles.inputa}
      onChangeText={userMailFunc}
      placeholder="Enter gmail"
      />
      <Text style={Styles.inputHead}>password</Text>

      <View style={Styles.boxinput}>
      <TextInput
      style={Styles.a}
      onChangeText={userPasswordFunc}
      placeholder="Enter the password"
      secureTextEntry={p}     
      />
       <TouchableOpacity onPress={press1}>
      <FontAwesome5 name="eye" size={20}/>

      </TouchableOpacity>
      

      </View>
      <Text style={Styles.inputHead}>Confirm password</Text>

      <View style={Styles.boxinput}>
      <TextInput
      style={Styles.a}
      onChangeText={conPasswordFunc}
      placeholder="Confirm the password"
      secureTextEntry={q}     
      />
       <TouchableOpacity onPress={press}>
      <FontAwesome5 name="eye" size={20}/>

      </TouchableOpacity>
      

      </View>
      <TouchableOpacity onPress={signUp}>
          <View style={Styles.loginButton}>
          <Text style={Styles.text}>
          signUp
          </Text>
          </View> 
      </TouchableOpacity>
    </ScrollView>
    </>
  )
}

export default Regi