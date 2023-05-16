import {useState, useEffect} from 'react';
const useUsersList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          setUsersList(json);

          console.log('### userList', json);
        })
        .catch(error => {
          console.error(error);
        });
    };

    fetchUsers();
  }, []);

  return {
    usersList,
  };
};

export default useUsersList;
