import { Feeling, Photo } from 'assets/svg';
import { Icon } from 'components/atoms/icon';

interface CreatePostProps {
  userImg: string;
  firstName: string;
}

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const CreatePost: React.FC<CreatePostProps> = ({ userImg = DEFAULT_IMAGE, firstName }) => {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={userImg} alt="" />
        <div className="open_post hover2">What's on your mind, {firstName}</div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <Icon name="live-video" color="pinkishRed" width={30} height={30} />
          Live Video
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Photo/Video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#f7b928" />
          Feeling/Activity
        </div>
      </div>
    </div>
  );
};
