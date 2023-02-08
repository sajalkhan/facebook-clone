import api from './api';
import { loginInfo, registerInfo } from 'pages/login/userInfo.type';

export const userLogin = async (login: loginInfo) => {
  try {
    const { data } = await api.post<{ login: loginInfo }>('/login', login);
    return data;
  } catch (error: any) {
    return error.response.data.message;
  }
};

export const userRegister = async (register: registerInfo) => {
  try {
    const { data } = await api.post<{ register: registerInfo }>('/register', register);
    return data;
  } catch (error: any) {
    return error.response.data.message;
  }
};
