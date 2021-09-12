//not using drawernavigation. turn on via stacknavigator


import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

//import { MainStackNavigator, AboutStackNavigator, OfferStackNavigator, ContactStackNavigator } from './StackNavigator';

import TabNavigator from './TabNavigator';

import CustomDrawerMenu from './CustomDrawerMenu';


const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {

    return (
        <Drawer.Navigator 
           drawerContentOptions={{
                activeTintColor: '#4f364f',
                itemStyle: { marginVertical: 5 },
           }}
            
            drawerContent={(props) => <CustomDrawerMenu {...props} />} >

            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="About Us" component={TabNavigator} />
            <Drawer.Screen name="What We Offer" component={TabNavigator} />
            <Drawer.Screen name="Contact Us" component={TabNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
