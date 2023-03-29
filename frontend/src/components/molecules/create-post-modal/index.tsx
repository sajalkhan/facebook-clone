import { useState, forwardRef } from 'react';
import { PulseLoader } from 'react-spinners';
import { Button } from 'components/atoms/button';
import { ImagePreview } from 'components/atoms/image-preview';
import { AddToYourPost } from 'components/atoms/add-to-your-post';
import { TextEmojiEditor } from 'components/molecules/text-emoji-editor';
import { PostError } from 'components/atoms/post-error';
interface createPostModalProps {
  ref?: React.Ref<HTMLDivElement>;
  userImage: string;
  firstName: string;
  lastName: string;
  isLoadingPost: boolean;
  postText: string;
  postImages: string[];
  postError: string | null;
  setPostText: (value: string) => void;
  setPostImages: (value: string[]) => void;
  setPostError: (value: string) => void;
  handlePost: (text: string, images?: string[]) => void;
  handlePostModal: () => void;
}

const defaultImg = process.env.REACT_APP_DEFAULT_IMAGE;
export const CreatePostModal: React.FC<createPostModalProps> = forwardRef(
  (
    {
      userImage = defaultImg,
      firstName,
      lastName,
      postText,
      postError,
      setPostText,
      postImages,
      setPostImages,
      setPostError,
      handlePostModal,
      handlePost,
      isLoadingPost
    },
    ref
  ) => {
    const [showPrev, setShowPrev] = useState(false);

    return (
      <div className="blur">
        <div className="create-post-modal" ref={ref}>
          {postError && <PostError error={postError || ''} setError={setPostError} />}

          <div className="create-post-modal__header">
            <div className="small_circle" onClick={handlePostModal}>
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

          <TextEmojiEditor name={firstName} text={postText} setText={setPostText} isShowImg={showPrev} />
          {showPrev && (
            <ImagePreview
              images={postImages}
              setImages={setPostImages}
              postError={postError}
              setError={setPostError}
              setShowPrev={setShowPrev}
            />
          )}

          <AddToYourPost setShowPrev={setShowPrev} />

          <Button
            modifiers="primary"
            disabled={isLoadingPost || (!postImages.length && !postText)}
            onClick={() => handlePost(postText, postImages)}
          >
            {isLoadingPost ? <PulseLoader color="#fff" size={5} /> : 'Post'}
          </Button>
        </div>
      </div>
    );
  }
);

CreatePostModal.displayName = 'createPostModal';
