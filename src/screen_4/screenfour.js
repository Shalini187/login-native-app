import React from 'react';
import {StyleSheet, Text, TextInput, Pressable, SafeAreaView} from 'react-native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

import Pic from '../Image/image_4.png';
import { Image } from 'react-native';

const ScreenFour = ({navigation} ) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={Pic}
      />
      <KeyboardAwareScrollView style = {{flex: 1}}>
      <Text style = {styles.titleText}>
        Forgot Password
      </Text> 
      <Text style = {{textAlign: 'center',}}>
        We will send you an email to reset your password.
      </Text>
      <Text style = {{textAlign: 'center',}}>
        Please enter your mail address below.
      </Text >
      
      <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Enter your email address"
          placeholderTextColor = "grey"
          autoFocus={true} 
          returnKeyType = { "next" }
          autoCapitalize = {"none"}
      />

      <Pressable  style = {styles.submitButton}>
        <Text style = {styles.submitButtonText}> Submit </Text>
      </Pressable >
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
    margin: 25,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.10)', // 40% opaque,
    margin: 25,
    height: 50,
    padding: 10,
    width: 300,
    color: 'black',
    textAlign: 'center',
 },
 submitButton: {
  backgroundColor: 'rgba(10,10,250,100)',
  padding: 10,
  margin: 25
},
submitButtonText:{
  color: 'white',
  fontWeight: "bold",
  textAlign: 'center',
  fontSize: 18,
}
});

export default ScreenFour;