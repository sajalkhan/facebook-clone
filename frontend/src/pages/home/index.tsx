import React from 'react';
import { useAppSelector } from 'store/hooks';
import { Header } from 'components/organisms/header';
import { HomeLeftArea } from 'components/molecules/home-left-area';
import { HomeRightArea } from 'components/molecules/home-right-area';
import { Stories } from 'components/molecules/stories';
import { stories } from 'constants/home';

const Home: React.FC = () => {
  const { first_name, last_name, picture } = useAppSelector(state => state.login.response);

  return (
    <div className="home">
      <Header firstName={first_name} lastName={last_name} />
      <HomeLeftArea firstName={first_name} lastName={last_name} userImg={picture} />
      <div className="home__middle">
        <Stories userStories={stories} />
      </div>
      <HomeRightArea firstName={first_name} lastName={last_name} userImg={picture} />
    </div>
  );
};

export default Home;
