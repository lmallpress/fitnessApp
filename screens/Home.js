import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';


//import { AboutStackNavigator } from '../navigation/StackNavigator';
//import About from './About';


const { width } = Dimensions.get('window')

const Home = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
        <View
          style={styles.slide1}
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../images/strong_neo.jpg')}
          />
        </View>
        <View
          style={styles.slide2}
        >
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../images/girlboxer2_mercury.jpg')}
          />
        </View>
        <View
          style={styles.slide3}
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
        <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Strength</Text>
          </View>

          <View style={styles.slide2}>
            <Text style={styles.text}>Vitality</Text>
          </View>

          <View style={styles.slide3}>
            <Text style={styles.text}>Energy</Text>
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

  text: {
    //I want to incorporate one of the following fonts: Playfair Display, Montserrat, Lato, Lora, Roboto, Exo, Libre Baskerville:  https://reactnative.dev/docs/text
    color: '#F0E68C',
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
});

export default Home;