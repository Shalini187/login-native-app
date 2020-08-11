import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';


import Pic from '../Image/image_2.jpg';
import { Image } from 'react-native';

const ScreenTwo= () => {
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
        404 ERROR
      </Text>
    </View>
    <View style={styles.container}>
      <Text style ={{fontSize: 16}}>
      Sorry, The Page Not Found!
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
    fontSize: 50,
    fontWeight: "bold"
  }
});

export default ScreenTwo;