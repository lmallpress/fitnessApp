import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

import { AboutStackNavigator } from '../navigation/StackNavigator';
import About from './About';


const { width } = Dimensions.get('window')

const Home = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
        <View
          style={styles.slide1}
        /*title={
           <Text numberOfLines={1}>Strong</Text> 
         } */
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../images/strong_neo.jpg')}
          />
        </View>
        <View
          style={styles.slide2}
        /* title={
           <Text numberOfLines={1}>Boxer</Text>
         } */
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../images/girlboxer2_mercury.jpg')}
          />
        </View>
        <View
          style={styles.slide3}
        /*  title={
            <Text numberOfLines={1}>Think About Things</Text>
          } */
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../images/squarethinkaboutthings_zeke.jpg')}
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

        {/*bottom slides */}
        <Swiper style={styles.wrapper} height={400} horizontal={true} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Stay Strong</Text>
          </View>

          <View style={styles.slide2}>
            <Text style={styles.text}>Be Healthy</Text>
          </View>

          <View style={styles.slide3}>
            <Text style={styles.text}>Change Your Mind</Text>
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
  },

  image: {
    width,
    flex: 1
  }
});

export default Home;