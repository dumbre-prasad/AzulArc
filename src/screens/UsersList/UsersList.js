import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import User from './User';
import useUsersList from './useUsersList';

const UsersList = () => {
  const {usersList} = useUsersList();

  console.log('### comp', usersList && usersList[0]);

  return (
    <SafeAreaView>
      <FlatList
        data={usersList}
        renderItem={({item}) => <User name={item.name} email={item.email} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UsersList;
