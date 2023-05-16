import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const UserDetails = () => {
  const route = useRoute();
  console.log('$$$ route', route?.params);
  const userData = route?.params?.userData;
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Name: {userData?.name}</Text>
      <Text style={styles.text}>Email: {userData?.email}</Text>

      <Text style={styles.text}>Address</Text>
      <Text style={styles.text}>Street: {userData?.address?.street}</Text>
      <Text style={styles.text}>Suite: {userData?.address?.suite}</Text>
      <Text style={styles.text}>City: {userData?.address?.city}</Text>
      <Text style={styles.text}>Phone Number: {userData?.phone}</Text>
      <Text style={styles.text}>Website: {userData?.website}</Text>
    </View>
  );
};

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

export default UserDetails;
