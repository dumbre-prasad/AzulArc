import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../navigation/NavigationConstants';

const User = ({userData}) => {
  const navigation = useNavigation();

  const navigateToUserDetails = () => {
    navigation.navigate(SCREENS.USER_DETAILS, {userData});
  };

  return (
    <TouchableOpacity style={styles.Container} onPress={navigateToUserDetails}>
      <Text style={styles.text}>Name: {userData?.name}</Text>
      <Text style={styles.text}>Email: {userData?.email}</Text>
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 8,
    borderRadius: 8,
  },
  text: {
    padding: 4,
  },
});
