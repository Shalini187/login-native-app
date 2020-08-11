import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';


import Pic from '../Image/image_1.jpg';
import { Image } from 'react-native';

const ScreenOne = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image
        style={styles.logo}
        source={Pic}
    />
    </View>
    <View style={styles.container}>
      <Text style={styles.titleText}>
        SOMETHING WENT WRONG 
      </Text>
    </View>
    <View style={styles.container}>
      <Text>
      Please try refreshing or try later
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -50,
    position: 'relative'
  },
  logo: {
    width: 500,
    height: 500
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ScreenOne;