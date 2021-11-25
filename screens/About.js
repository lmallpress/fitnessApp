import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Card from '../shared/Card';


const About = () => {

  return (
    <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>

        <Card style={styles.card}>
          <Text style={styles.headline} > About Us </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
        </Card>

        <Card style={styles.card} >

          <Text style={styles.headline} > FAQs </Text>
          <Text>Every answer you ever wanted, even the ones you didn't know you needed</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>

        </Card>

        <Card style={styles.card} >
          <Text style={styles.headline} > Meet the trainers </Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>

        </Card>

      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#F0E68C',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardContent: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headline: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

});

export default About;