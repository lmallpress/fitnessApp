import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';


const Offer = () => {
    return (
        <View style={styles.container}>

          <Swiper style={styles.wrapper} height={500} showsButtons loop={false}>   

                <View
                    style={styles.slide}
                    title={
                        <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
                    }
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/boxing.jpg')}
                    />
                </View>

                <View
                    style={styles.slide1}
                >

                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/equip.jpg')}
                    />

                </View>

                <View
                    style={styles.slide2}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/trainers.jpg')}
                    />
                </View>

                <View
                    style={styles.slide3}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/membership.jpg')}
                    />
                </View>

            </Swiper>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#990000'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b30000'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc0000'
    },

    /*   text: {
         //I want to incorporate one of the following fonts: Playfair Display, Montserrat, Lato, Lora, Roboto, Exo, Libre Baskerville:  https://reactnative.dev/docs/text
         color: '#F0E68C',
         fontSize: 30,
         fontWeight: 'bold'
       }, */

    image: {
        // width,
        flex: 1
    }
});

export default Offer;