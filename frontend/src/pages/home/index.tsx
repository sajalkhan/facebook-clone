import { useCallback } from 'react';
import { Header } from 'components/organisms/header';
import { HomeLeftArea } from 'components/molecules/home-left-area';
import { HomeRightArea } from 'components/molecules/home-right-area';
import { CreatePost } from 'components/molecules/create-post';
import { Stories } from 'components/molecules/stories';
import { SendVerification } from 'components/atoms/send-verification';
import { stories } from 'constants/home';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import { sendVerificationMail } from './sendVerificationSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const { first_name, last_name, picture, token, verified } = useAppSelector(state => state.login.response);
  const { message } = useAppSelector(state => state.sendVerification?.response);

  const sendVerificationLink = useCallback(
    (token: string) => {
      dispatch(sendVerificationMail(token));
    },
    [dispatch]
  );

  return (
    <div className="home">
      <Header firstName={first_name} lastName={last_name} />
      <HomeLeftArea firstName={first_name} lastName={last_name} userImg={picture} />
      <div className="home__middle">
        <Stories userStories={stories} />
        {!verified && <SendVerification onClick={() => sendVerificationLink(token)} response={message} />}
        <CreatePost userImg={picture} firstName={first_name} />
      </div>
      <HomeRightArea firstName={first_name} lastName={last_name} userImg={picture} />
    </div>
  );
};

export default Home;
