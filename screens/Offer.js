import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';


{/*  const Offer = () => {
    return (
    <View style={styles.center}>
      <Text>This is the offer screen</Text>
    </View>
  );
}; */}

const Offer = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons loop={false}>
     <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
          }
        >
          <Image style={styles.image} source={require('../images/1.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}
        >
          <Image style={styles.image} source={require('../images/2.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
        >
          <Image style={styles.image} source={require('../images/3.jpg')} />
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
          }
        >
          <Image style={styles.image} source={require('../images/4.jpg')} />
        </View>
  </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
 /*  image: {
    width,
    flex: 1
  }, */
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Offer;
