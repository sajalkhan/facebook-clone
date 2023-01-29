/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserData = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
};

export const useGetUsers = (onSuccess?: (data: any) => void, onError?: (err: any) => void) => {
  return useQuery(['users'], fetchUserData, {
    // cacheTime: 5000, default value is 5 min
    staleTime: 5000, // stel time used for stop recall api request
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    // refetchInterval: 2000, // if we need to feath data frequenty we can use this
    // refetchIntervalInBackground: true,
    onSuccess,
    onError,
    //data transformation 👇 it will pass modified data
    select: data => {
      const userInfo = data?.data.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      });
      return userInfo;
    },
  });
};
