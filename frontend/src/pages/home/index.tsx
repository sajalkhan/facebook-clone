import React from 'react';
import { useAppSelector } from 'store/hooks';

const Home: React.FC = () => {
  const isLoggedIn = useAppSelector(state => state.login.fetchLoginStatus === 'SUCCESS');
  const currentUser = useAppSelector(state => state.login.currentUser);

  return (
    <div>
      home
      {isLoggedIn && (
        <>
          <span> user Name: {currentUser.username}</span>
          <img src={currentUser.picture} alt="image" />
        </>
      )}
    </div>
  );
};

export default Home;
