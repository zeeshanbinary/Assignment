import React, {useState} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART_SCREEN, HOME_SCREEN, SEARCH_SCREEN} from '../route/route-label';
import Home from '../screen/Home/Home';
import {images} from '../assets';
import {scale, verticalScale} from 'react-native-size-matters';
import {colors} from '../shared';
import Search from '../screen/Search/Search';
import Cart from '../screen/Cart/Cart';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.user}
              resizeMode="contain"
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: focused ? colors.primary : colors.gray,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH_SCREEN}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.search}
              resizeMode="contain"
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: focused ? colors.primary : colors.gray,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={CART_SCREEN}
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={images.cart}
              resizeMode="contain"
              style={{
                width: scale(20),
                height: verticalScale(20),
                tintColor: focused ? colors.primary : colors.gray,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
