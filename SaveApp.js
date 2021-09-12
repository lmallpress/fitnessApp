import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header' })
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'HUMMA Fitness & Training',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;

