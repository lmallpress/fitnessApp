import React from 'react';
import { StyleSheet, Text  } from 'react-native';
import { Roboto} from '@expo-google-fonts/inter';
import { ScreenStackHeaderConfig } from 'react-native-screens';

export const CustomText = props => <Text style={styles.text}>{props.children}</Text>

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto', sansSerif,
  }
});