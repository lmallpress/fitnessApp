import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import { CustomText } from '../assets/fonts/CustomText';

import DrawerNavigator from './navigation/DrawerNavigator';  //why doesn't StackNavigator work here?  

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator/>   
    </NavigationContainer>

  );
}
export default App;
