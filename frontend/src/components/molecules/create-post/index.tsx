import { LiveVideo, Feeling, Photo } from 'assets/svg';

interface CreatePostProps {
  userImg: string;
  firstName: string;
}

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const CreatePost: React.FC<CreatePostProps> = ({ userImg = DEFAULT_IMAGE, firstName }) => {
  return (
    <div className="create-post">
      <div className="create-post__header">
        <img src={userImg} alt="" />
        <div className="create-post__input hover2">What's on your mind, {firstName}</div>
      </div>

      <div className="divider"></div>

      <div className="create-post__body">
        <div className="create-post__icon">
          <LiveVideo color="#F3425F" />
          Live Video
        </div>
        <div className="create-post__icon">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="create-post__icon">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
};