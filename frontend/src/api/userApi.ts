import api from './api';
import { AxiosResponse } from 'axios';
import { loginInfo, registerInfo } from 'types/userInfo.type';

interface ApiError {
  message: string;
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

const makeApiCall = async <T>(
  endpoint: string,
  data: any,
  method: HttpMethod,
  headers: { [key: string]: string } = {}
): Promise<T | string> => {
  try {
    const response: AxiosResponse<T> = await api[method](endpoint, data, { headers });
    return response.data;
  } catch (error: any) {
    const message = (error?.response?.data as ApiError)?.message;
    return message;
  }
};

export const userLogin = (login: loginInfo) => makeApiCall<loginInfo>('/login', login, 'post');

export const userRegister = (register: registerInfo) => makeApiCall<registerInfo>('/register', register, 'post');

export const userActivate = async (token: string, userToken: string) => {
  return makeApiCall<{ token: string }>('/activate', { token }, 'post', { Authorization: `Bearer ${userToken}` });
};

export const userSendVerificationMail = async (userToken: string) => {
  return makeApiCall<{ token: string }>('/sendVerification', {}, 'post', { Authorization: `Bearer ${userToken}` });
};
