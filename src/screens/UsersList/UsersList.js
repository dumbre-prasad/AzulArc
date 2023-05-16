import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import User from './User';
import useUsersList from './useUsersList';

const UsersList = () => {
  const {usersList} = useUsersList();

  return (
    <SafeAreaView>
      <FlatList
        data={usersList}
        renderItem={({item}) => <User userData={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UsersList;
