import api from './api';
import { loginInfo } from 'pages/login/user.types';

// export const listUsers = () => {
//   return api.get<{ users: User[] }>('/user/all').then(res => res.data.users);
// };

export const userLogin = (login: loginInfo) => {
  return api.post<{ login: loginInfo }>('/login', login).then(res => res.data);
};

// export const deleteUser = (id: string) => {
//   return api.delete(`/user/${id}`);
// };
