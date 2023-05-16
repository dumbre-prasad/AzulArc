import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UsersList from '../screens/UsersList/UsersList';
import UserDetails from '../screens/UserDetails';

const Stack = createStackNavigator();

const RootNavigatonStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigatonStack;
