/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useMutation } from 'react-query';

const addNewUser = (user: any) => {
  return axios.post(`https://jsonplaceholder.typicode.com/users`, user);
};

export const useAddNewUser = () => {
  return useMutation(addNewUser);
};
