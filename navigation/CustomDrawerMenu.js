//this is tied to drawernavigation, which is not being used


import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const CustomDrawerMenu = (props) => {

  return (
    <ScrollView{...props}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}>

        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../images/HFTRed.jpg')}
              style={styles.drawerImage}
            />
          </View>

          <View style={{ flex: 2 }}>
            <Text
              style={styles.drawerHeaderText}
              onPress={() => Linking.openURL('http://www.hummafitness&training.com')}>HUMMA Fitness & Training
              </Text>
          </View>

        </View>

        <DrawerItemList {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#151a1e',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    //color: '#F0FFFF',
    //color: '#95a9b7',
    color: '#F0E68C',
    fontSize: 20,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    height: 50,
    width: 50,
    borderRadius: 50 
  },
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24
  },
  linkText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey'
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomDrawerMenu;