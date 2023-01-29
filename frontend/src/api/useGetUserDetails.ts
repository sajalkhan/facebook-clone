/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserData = ({ queryKey }: any) => {
  const userId = queryKey[1];
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const useGetUserDetails = (userId: string | undefined) => {
  return useQuery(['users', userId], fetchUserData, {
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: data => {
      return {
        id: data?.data.id,
        name: data?.data.name,
        email: data?.data.email,
        phone: data?.data.phone,
      };
    },
  });
};
