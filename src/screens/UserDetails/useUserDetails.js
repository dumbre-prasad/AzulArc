import {useState, useEffect} from 'react';

const initialState = {
  data: undefined,
  isLoading: true,
  error: undefined,
};

const useUserDetails = ({userId}) => {
  const [detailsApiState, setDetailsApiState] = useState(initialState);

  useEffect(() => {
    const fetchUsers = () => {
      setDetailsApiState(initialState);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(json => {
          setDetailsApiState({
            data: json,
            isLoading: false,
            error: undefined,
          });
        })
        .catch(error => {
          setDetailsApiState({
            data: undefined,
            isLoading: false,
            error,
          });
        });
    };

    fetchUsers();
  }, [userId]);

  return {
    ...detailsApiState,
    ...detailsApiState.data,
  };
};

export default useUserDetails;
