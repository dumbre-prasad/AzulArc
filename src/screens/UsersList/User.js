import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const User = ({name, email}) => {
  return (
    <View style={styles.Container}>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 8,
  },
});
