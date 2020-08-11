import 'react-native-gesture-handler';

import React from 'react';

import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenThree, ScreenFour} from './src';

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={ScreenThree} options={{ title: 'LOGIN' }}/>
        <Stack.Screen name="forgot_password" component={ScreenFour} options={{ title: 'FORGOT PASSWORD' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;