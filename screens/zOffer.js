import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Offer = () => {
    return (
    <View style={styles.center}>
      <Text>This is the offer screen</Text>
    </View>
  );
}; 


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }
});

export default Offer;