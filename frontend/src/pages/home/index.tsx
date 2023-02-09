import React from 'react';
import { useAppSelector } from 'store/hooks';

const Home: React.FC = () => {
  const initial_state = useAppSelector(state => state.login);

  return (
    <div>
      home
      <div> First Name:{initial_state?.first_name}</div>
      <div> Last Name:{initial_state?.last_name}</div>
    </div>
  );
};

export default Home;
