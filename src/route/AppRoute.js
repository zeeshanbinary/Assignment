import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MAIN_TAB, SPLASH_SCREEN} from './route-label';
import Splash from '../screen/Splash/Splash';
import Tabs from '../Tabs/Tabs';
const Stack = createNativeStackNavigator();

const AppRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SPLASH_SCREEN}
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={MAIN_TAB}
          component={Tabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
