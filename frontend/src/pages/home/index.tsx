import React from 'react';
import { useAppSelector } from 'store/hooks';

const Home: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.fetchLoginStatus === 'SUCCESS');
  const response = useAppSelector(state => state.login.response);

  return (
    <div>
      home
      {isLoggedIn && (
        <>
          <span> user Name: {response.username}</span>
          <img src={response.picture} alt="image" />
        </>
      )}
    </div>
  );
};

export default Home;
