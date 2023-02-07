import api from './api';
import { loginInfo, registerInfo } from 'pages/login/userInfo.type';

const convertHtmlToText = (error: any) => {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(error.response.data, 'text/html');
  const pre: any = htmlDoc.querySelector('pre');
  return pre.textContent;
};

export const userLogin = async (login: loginInfo) => {
  try {
    const { data } = await api.post<{ login: loginInfo }>('/login', login);
    return data;
  } catch (error) {
    throw new Error(convertHtmlToText(error));
  }
};

export const userRegister = async (register: registerInfo) => {
  try {
    const { data } = await api.post<{ register: registerInfo }>('/register', register);
    return data;
  } catch (error) {
    throw new Error(convertHtmlToText(error));
  }
};
