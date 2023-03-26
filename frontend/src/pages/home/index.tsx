import Cookies from 'js-cookie';
import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from 'components/organisms/header';
import { HomeLeftArea } from 'components/molecules/home-left-area';
import { HomeRightArea } from 'components/molecules/home-right-area';
import { CreatePost } from 'components/molecules/create-post';
import { CreatePostModal } from 'components/molecules/create-post-modal';
import { Stories } from 'components/molecules/stories';
import { SendVerification } from 'components/atoms/send-verification';
import { setLoginUser } from 'pages/login/userLoginSlice';
import useClickOutside from 'helpers/clickOutside';
import dataURItoBlob from 'helpers/dataURLtoBlob';
import { stories } from 'constants/home';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { userSendVerificationMail } from 'api/userApi';
import { uplaodImages } from 'api/uploadApi';
import { createPost } from 'api/postApi';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch() as any;
  const createPostModalRef = useRef<HTMLDivElement>(null);
  const [isLoadingPost, setIsLoadingPost] = useState<boolean>(false);
  const [postText, setPostText] = useState('');
  const [postError, setPostError] = useState<string>('');
  const [postImages, setPostImages] = useState<string[]>([]);
  const [verificationMessage, setVerificationMessage] = useState<string>('');
  const [visibleCreatePostModal, setVisibleCreatePostModal] = useState<boolean>(false);

  useClickOutside(createPostModalRef, () => setVisibleCreatePostModal(false));
  const { first_name, last_name, picture, token, verified, id } = useAppSelector(state => state.login.response);

  const sendVerificationLink = useCallback(async () => {
    const { message } = await userSendVerificationMail(token);
    setVerificationMessage(message);
  }, []);

  const handleLogout = () => {
    Cookies.set('user', '');
    dispatch(
      setLoginUser({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        response: {},
        bYear: 1990,
        bMonth: 12,
        bDay: 1,
        gender: ''
      })
    );
    navigate('/login');
  };

  const handlePost = useCallback(async (text: string, images?: string[]) => {
    setIsLoadingPost(true);

    try {
      const uploadImages = async () => {
        if (images && images.length) {
          const imageCollection = await images.map(img => dataURItoBlob(img));
          const path = `facebook/user/${id}/post images`;
          const formData = new FormData();
          formData.append('path', path);

          imageCollection.forEach(image => {
            formData.append('file', image);
          });

          const response = await uplaodImages(formData, token);
          return response;
        } else {
          return null;
        }
      };

      const imagesResponse = await uploadImages();

      const postData = {
        type: null,
        background: null,
        text,
        images: imagesResponse,
        user: id
      };

      await createPost(postData, token);

      setPostText('');
      setPostImages([]);
      setVisibleCreatePostModal(false);
    } catch (error) {
      setPostError(error as any);
    } finally {
      setIsLoadingPost(false);
    }
  }, []);

  return (
    <div className="home">
      <Header firstName={first_name} lastName={last_name} handleLogout={handleLogout} />
      <HomeLeftArea firstName={first_name} lastName={last_name} userImg={picture} />
      <div className="home__middle">
        <Stories userStories={stories} />
        {!verified && <SendVerification onClick={sendVerificationLink} response={verificationMessage} />}

        <CreatePost userImg={picture} firstName={first_name} onClick={() => setVisibleCreatePostModal(true)} />

        {visibleCreatePostModal && (
          <CreatePostModal
            ref={createPostModalRef}
            userImage={picture}
            lastName={last_name}
            firstName={first_name}
            postText={postText}
            setPostText={setPostText}
            postImages={postImages}
            setPostImages={setPostImages}
            postError={postError}
            setPostError={setPostError}
            isLoadingPost={isLoadingPost}
            handlePost={handlePost}
            handlePostModal={() => setVisibleCreatePostModal(false)}
          />
        )}
      </div>
      <HomeRightArea firstName={first_name} lastName={last_name} userImg={picture} />
    </div>
  );
};

export default Home;
