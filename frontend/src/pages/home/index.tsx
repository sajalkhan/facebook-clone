import React from 'react';
import { useAppSelector } from 'store/hooks';
import { Header } from 'components/organisms/header';
import { HomeLeftArea } from 'components/molecules/home-left-area';
import { HomeRightArea } from 'components/molecules/home-right-area';

const Home: React.FC = () => {
  const { first_name, last_name, picture } = useAppSelector(state => state.login.response);

  return (
    <div>
      <Header firstName={first_name} lastName={last_name} />
      <HomeLeftArea firstName={first_name} lastName={last_name} userImg={picture} />
      <HomeRightArea firstName={first_name} lastName={last_name} userImg={picture} />
    </div>
  );
};

export default Home;
