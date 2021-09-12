//This is the bottom tab navigator

import React from 'react';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, AboutStackNavigator, OfferStackNavigator, ContactStackNavigator } from './StackNavigator';
//import App from '../App';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>

     <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      
      <Tab.Screen
        name="About"
        component={AboutStackNavigator}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-people-outline" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Offer"
        component={OfferStackNavigator}
        options={{
          tabBarLabel: 'Offer',
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactStackNavigator}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
      />

    </Tab.Navigator>
  );
}


export default BottomTabNavigator;
