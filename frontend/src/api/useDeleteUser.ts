/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useMutation } from 'react-query';

//NOTE: https://github.com/tannerlinsley/react-query/discussions/3206
const deleteUser = (userId: string) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
};

export const useDeleteUser = () => {
  return useMutation((userId: string) => deleteUser(userId)); // closure
};
