import { EmojiClickData } from 'emoji-picker-react';
import { useState, useEffect, forwardRef, useRef } from 'react';
import { EmojiPicker } from 'components/atoms/emoji-picker';
import { AddToYourPost } from 'components/atoms/add-to-your-post';
import { Button } from 'components/atoms/button';

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
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [cursorPosition, setCursorPosition] = useState<number>(0);

    useEffect(() => {
      textRef.current?.focus();
    }, []);

    useEffect(() => {
      if (textRef.current) {
        textRef.current.selectionEnd = cursorPosition;
      }
    }, [cursorPosition]);

    const handleEmoji = (emoji: EmojiClickData) => {
      const currentTextRef = textRef.current;
      if (currentTextRef) {
        currentTextRef.focus();
        const start = text.substring(0, currentTextRef.selectionStart);
        const end = text.substring(currentTextRef.selectionStart);

        const newText = start + emoji.emoji + end;
        setText(newText);
        setCursorPosition(start.length + emoji.emoji.length);
      }
    };

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

          {!showPrev && (
            <>
              <div className="create-post-modal__input-wrapper">
                <textarea
                  value={text}
                  ref={textRef}
                  maxLength={120}
                  className="create-post-modal__input"
                  placeholder={`What's on your mind, ${firstName}`}
                  onChange={e => setText(e.target.value)}
                ></textarea>
              </div>

              <EmojiPicker onEmojiClick={handleEmoji} />
            </>
          )}

          <AddToYourPost />
          <Button modifiers="primary">Post</Button>
        </div>
      </div>
    );
  }
);

CreatePostModal.displayName = 'createPostModal';
