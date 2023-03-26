import api from './api';
import { AxiosResponse } from 'axios';

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

export const uplaodImages = async (formData: FormData, userToken: string) => {
  return makeApiCall<{ url: string }>('/uploadImages', formData, 'post', {
    Authorization: `Bearer ${userToken}`,
    'content-type': 'multipart/form-data'
  });
};
