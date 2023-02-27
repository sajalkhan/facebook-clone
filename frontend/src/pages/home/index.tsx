import Cookies from 'js-cookie';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/header';
import { HomeLeftArea } from 'components/molecules/home-left-area';
import { HomeRightArea } from 'components/molecules/home-right-area';
import { CreatePost } from 'components/molecules/create-post';
import { Stories } from 'components/molecules/stories';
import { SendVerification } from 'components/atoms/send-verification';
import { stories } from 'constants/home';

import { useAppSelector } from 'store/hooks';
import { userSendVerificationMail } from 'api/userApi';

const Home = () => {
  const navigate = useNavigate();
  const [verificationMessage, setVerificationMessage] = useState<string>('');

  const { first_name, last_name, picture, token, verified } = useAppSelector(state => state.login.response);

  const sendVerificationLink = useCallback(async () => {
    const { message } = await userSendVerificationMail(token);
    setVerificationMessage(message);
  }, []);

  const handleLogout = () => {
    Cookies.set('user', '');
    navigate('/login');
  };

  return (
    <div className="home">
      <Header firstName={first_name} lastName={last_name} handleLogout={handleLogout} />
      <HomeLeftArea firstName={first_name} lastName={last_name} userImg={picture} />
      <div className="home__middle">
        <Stories userStories={stories} />
        {!verified && <SendVerification onClick={sendVerificationLink} response={verificationMessage} />}
        <CreatePost userImg={picture} firstName={first_name} />
      </div>
      <HomeRightArea firstName={first_name} lastName={last_name} userImg={picture} />
    </div>
  );
};

export default Home;
