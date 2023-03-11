import { useState, forwardRef } from 'react';
import { Button } from 'components/atoms/button';
import { AddToYourPost } from 'components/atoms/add-to-your-post';
import { TextEmojiEditor } from 'components/molecules/text-emoji-editor';

interface createPostModalProps {
  userImage: string;
  firstName: string;
  lastName: string;
  onClick: () => void;
  ref?: React.Ref<HTMLDivElement>;
}

const defaultImg = process.env.REACT_APP_DEFAULT_IMAGE;
export const CreatePostModal: React.FC<createPostModalProps> = forwardRef(
  ({ userImage = defaultImg, firstName, lastName, onClick }, ref) => {
    const [text, setText] = useState('');
    const [showPrev] = useState(false);

    return (
      <div className="blur">
        <div className="create-post-modal" ref={ref}>
          <div className="create-post-modal__header">
            <div className="small_circle" onClick={onClick}>
              <i className="exit_icon"></i>
            </div>
            <span>Create Post</span>
          </div>

          <div className="create-post-modal__profile">
            <img src={userImage} alt="" className="create-post-modal__profile-img" />
            <div className="create-post-modal__profile-details">
              <div className="create-post-modal__profile-name">
                {firstName} {lastName}
              </div>
              <div className="create-post-modal__profile-privacy">
                <img src="../../../icons/public.png" alt="" />
                <span>Public</span>
                <i className="arrowDown_icon"></i>
              </div>
            </div>
          </div>

          <TextEmojiEditor name={firstName} text={text} setText={setText} isShowImg={showPrev} />

          <AddToYourPost />
          <Button modifiers="primary">Post</Button>
        </div>
      </div>
    );
  }
);

CreatePostModal.displayName = 'createPostModal';
