import React from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import User from './User';
import useUsersList from './useUsersList';

const UsersList = () => {
  const {usersList, isLoading, error} = useUsersList();

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
    <SafeAreaView>
      <FlatList
        data={usersList}
        renderItem={({item}) => (
          <User userId={item.id} name={item.name} email={item.email} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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

export default UsersList;
