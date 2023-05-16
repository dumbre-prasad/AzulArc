import {useState, useEffect} from 'react';

const initialState = {
  data: undefined,
  isLoading: true,
  error: undefined,
};

const useUsersList = () => {
  const [listApiState, setListApiState] = useState(initialState);

  useEffect(() => {
    setListApiState(initialState);

    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setListApiState({
            data: json,
            isLoading: false,
            error: undefined,
          });
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchUsers();
  }, []);

  return {
    ...listApiState,
    usersList: listApiState.data,
  };
};

export default useUsersList;
