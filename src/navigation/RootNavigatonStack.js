import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UsersList from '../screens/UsersList';
import UserDetails from '../screens/UserDetails';
import {SCREENS} from './NavigationConstants';

const Stack = createStackNavigator();

const RootNavigatonStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.USER_LIST}
          component={UsersList}
          options={{
            title: 'Users List',
          }}
        />
        <Stack.Screen
          name={SCREENS.USER_DETAILS}
          component={UserDetails}
          options={{
            title: 'User Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigatonStack;
