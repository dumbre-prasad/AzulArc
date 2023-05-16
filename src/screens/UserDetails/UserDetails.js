import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import useUserDetails from './useUserDetails';

const UserDetails = () => {
  const route = useRoute();
  const userId = route?.params?.userId;

  const {name, email, address, phone, website, isLoading, error} =
    useUserDetails({
      userId,
    });

  if (isLoading) {
    return (
      <View style={styles.Container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.Container}>
        <Text style={styles.text}>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Email: {email}</Text>

      <Text style={styles.text}>Address</Text>
      <Text style={styles.text}>Street: {address?.street}</Text>
      <Text style={styles.text}>Suite: {address?.suite}</Text>
      <Text style={styles.text}>City: {address?.city}</Text>
      <Text style={styles.text}>Phone Number: {phone}</Text>
      <Text style={styles.text}>Website: {website}</Text>
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
