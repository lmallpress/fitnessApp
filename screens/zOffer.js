import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


//import { AboutStackNavigator } from '../navigation/StackNavigator';
//import About from './About';


const { width } = Dimensions.get('window')

const Offer = () => {
    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
                <View
                    style={styles.slide1}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/boxing.jpg')}
                    />
                </View>
                <View
                    style={styles.slide2}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/equip.jpg')}
                    />
                </View>
                <View
                    style={styles.slide3}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/trainers.jpg')}
                    />
                </View>
                <View
                    style={styles.slide4}
                >
                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../images/membership.jpg')}
                    />
                </View>
            </Swiper>

            <Swiper
                style={styles.wrapper}
                height={240}
                onMomentumScrollEnd={(e, state, context) =>
                    console.log('index:', state.index)
                }
                dot={
                    <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: '#000',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }
                paginationStyle={{
                    bottom: -23,
                    left: null,
                    right: 10
                }}
                loop
            >

                {/* bottom slides */}
                <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Boxing</Text>
                    </View>

                    <View style={styles.slide2}>
                        <Text style={styles.text}>Equipment</Text>
                    </View>

                    <View style={styles.slide3}>
                        <Text style={styles.text}>Trainers</Text>
                    </View>
                    <View style={styles.slide4}>
                        <Text style={styles.text}>Membership</Text>
                    </View>
                </Swiper>
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
        backgroundColor: '#3333ff'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f4f4f'
    },

    slide4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5DC',
        color: '#000000'
    },

    text: {
        //I want to incorporate one of the following fonts: Playfair Display, Montserrat, Lato, Lora, Roboto, Exo, Libre Baskerville:  https://reactnative.dev/docs/text
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    },
});

export default Offer;