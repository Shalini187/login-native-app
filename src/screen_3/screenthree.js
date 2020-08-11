import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, Button, Pressable, SafeAreaView, Alert} from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

import Pic from '../Image/image_3.jpg';
import { Image } from 'react-native';

const ScreenThree = ({navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const isEmailValid = () => {
      const req = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if (email != '')
      {
        if (req.test(email) === true){
          return true;
        }
        else{
          Alert.alert("Invalid Email_ID");
          console.log("Invalid Email_ID");
        }
      }
      else{
        Alert.alert("Cannot be Empty");
        console.log("Cannot be Empty");
      }
    }
  
    const isPasswordValid = () => {
      if (password != ''){
        if (password.match(/[a-z]/g) && password.match( 
          /[A-Z]/g) && password.match( 
          /[0-9]/g) && password.match( 
          /[^a-zA-Z\d]/g) && password.length >= 8)
        {
          return true;
        }
        else{
          Alert.alert("Create Strong Password, your Password looks Weak ");
          console.log("Create Strong Password, your Password looks Weak ");
        }
      }
      else{
        Alert.alert("Cannot be Empty");
        console.log("Cannot be Empty");
      }
    }
  
    isValid = () => {
      if (isPasswordValid() === true && isEmailValid() === true){
        Alert.alert("Succesfully Logged In");
        console.log("Succesfully Logged In");
        }
      else{
        Alert.alert("Log In Failed");
        console.log("Log In Failed");
      }
    }
      
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={Pic}
      />
      <KeyboardAwareScrollView style = {{flex: 1}}>
      <Text style = {styles.titleText}>
        NUEGOV
      </Text>
      
      
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Enter your email address"
          placeholderTextColor = "grey"
          value ={email}
          onChangeText={(email) => setEmail(email)}
          returnKeyType = { "next" }
          autoCapitalize = {"none"}
          title = "Enter Email"
          testID="email"
      />
          
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Enter your password"
          placeholderTextColor = "grey"
          value ={password}
          returnKeyType = { "next" }
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={true}
          title = "Enter Password"
          testID="password"
      />

      <Pressable  style = {styles.submitButton} testID="Pressable" onPress={isValid}>
        <Text style = {styles.submitButtonText}> LOGIN </Text>
      </Pressable >


      <Button
            title='Forgot Password?'
            titleStyle={{
                color: 'rgba(500,10,10,10.500)'
            }}
            onPress={() => navigation.navigate('forgot_password')}
            type='clear'
      />
      
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300
  },
  titleText: {
    margin: 15,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.10)', // 40% opaque,
    margin: 15,
    height: 50,
    padding: 10,
    width: 300,
    color: 'black',
    textAlign: 'center',
 },
 submitButton: {
  backgroundColor: 'rgba(10,10,250,100)',
  padding: 10,
  margin: 15
},
submitButtonText:{
  color: 'white',
  fontWeight: "bold",
  textAlign: 'center',
  fontSize: 18,
}
});

export default ScreenThree;

