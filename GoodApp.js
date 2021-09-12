import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function ActionBarIcon() {
  return (
    <Image
    source={require('./images/HFTYellow.png')}
    style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }} />
  );
}


function HomeScreen({ navigation }) {

  return (
    <View style={styles.MainContainer}>

      <Text style={styles.text}> Home Screen </Text>
    
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
            backgroundColor: '#26269c',
        },
        headerTintColor: '#F0FFFF',
        headerTitleStyle: {
            alignSelf: 'center',
            fontWeight: 'bold',            
        },
        }} 
      >
       <Stack.Screen name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: 'HUMMA Fitness & Training', 
            headerLeft : props => <ActionBarIcon {...props} /> }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  text: {
    textAlign: 'center',
    margin: 12,
    fontSize: 22,
    fontWeight: "100",
  },
 
});

export default App;