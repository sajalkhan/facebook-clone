/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const fetchUserData = async (page = 1) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=25&_page=${page}`);
};

export const useGetAlbumsByClick = () => {
  return useInfiniteQuery(['albums'], ({ pageParam = 1 }) => fetchUserData(pageParam), {
    enabled: false,
    staleTime: 5000, // stel time used for stop recall api request
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 25) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
};
