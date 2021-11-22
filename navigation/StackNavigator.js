//useNavigation, touchableOpacity and drawerActions are used to open the drawerNavigator

import * as React from 'react';
import 'react-native-gesture-handler';

import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SocialIcon } from 'react-native-elements';

import Home from '../screens/Home';
import About from '../screens/About';
import Offer from '../screens/Offer';
import Contact from '../screens/Contact';

//import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

const LogoTitle = () => {
    const navigation = useNavigation();
    return (
        /* <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >  
       /*  <TouchableOpacity onPress={() => Linking.openURL('https://fitnesswebsite.vercel.app/')} > 
 
       <TouchableOpacity onPress={() => navigation.openDrawer()} > */
        <TouchableOpacity >

            {/*   <Image
                style={{ width: 40, height: 40, borderRadius: 40 }}
                source={require('../images/HFTRed.jpg')}
            /> */}

            <View style={{ flex: 2 }}>
                <Text
                    style={{ color: '#F0E68C', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}
                    onPress={() => Linking.openURL('https://fitnesswebsite.vercel.app/')}>HUMMA FITNESS & TRAINING
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#151a1e',
    },
    //headerTintColor: '#151a1e',
    //headerTitleStyle: {
    //alignSelf: 'center', fontWeight: 'bold',
    //}
    // headerTitle: false
};


const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptionStyle} >
            <Stack.Screen
                name="Home" component={Home}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                   /* headerRight: () => (
                        <TouchableOpacity  >
                            <View style={{ flexDirection: 'row' }}>
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.facebook.com')}
                                    type="facebook"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.instagram.com/')}
                                    type="instagram"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                            </View>
                        </TouchableOpacity>
                   ), */
                }}
            />
        </Stack.Navigator>
    );
}

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="screen" screenOptions={screenOptionStyle} >
            <Stack.Screen
                name="About Us" component={About}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                   /* headerRight: () => (
                        <TouchableOpacity  >
                            <View style={{ flexDirection: 'row' }}>
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.facebook.com')}
                                    type="facebook"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.instagram.com/')}
                                    type="instagram"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                            </View>
                        </TouchableOpacity>
                    ), */
                }}
            />
        </Stack.Navigator>
    );
}

const OfferStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="screen" screenOptions={screenOptionStyle} >
            <Stack.Screen
                name="What We Offer" component={Offer}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                   /* headerRight: () => (
                        <TouchableOpacity  >
                            <View style={{ flexDirection: 'row' }}>
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.facebook.com')}
                                    type="facebook"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.instagram.com/')}
                                    type="instagram"
                                    style={{ width: 30, height: 30, borderRadius: 30 }}
                                />
                            </View>
                        </TouchableOpacity>
                    ), */
                }}
            />
        </Stack.Navigator>
    );
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="screen" screenOptions={screenOptionStyle} >
            <Stack.Screen name="Contact" component={Contact}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                  /*  headerRight: () => (
                        <TouchableOpacity  >
                            <View style={{ flexDirection: 'row' }}>
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.facebook.com')}
                                    type="facebook"
                                    style={{ width: 20, height: 20, borderRadius: 20 }}
                                />
                                <SocialIcon
                                    onPress={() => Linking.openURL('https://www.instagram.com/')}
                                    type="instagram"
                                    style={{ width: 20, height: 20, borderRadius: 20 }}
                                />
                            </View>
                        </TouchableOpacity>  
                  ), */
                }}
            />
        </Stack.Navigator>
    );
} 

export { MainStackNavigator, AboutStackNavigator, OfferStackNavigator, ContactStackNavigator };