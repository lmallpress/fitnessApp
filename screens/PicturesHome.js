import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')


const Home = () => {
    return (
        <Swiper style={styles.wrapper} showsButtons loop={false}>

            <View style={styles.slide1}>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require('../images/strong_neo.jpg')}
                />
            </View>

            <View style={styles.slide2}>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require('../images/girlboxer2_mercury.jpg')}
                />
            </View>

            <View style={styles.slide3}>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require('../images/squarethinkaboutthings_zeke.jpg')}
                />
            </View>

        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Home;