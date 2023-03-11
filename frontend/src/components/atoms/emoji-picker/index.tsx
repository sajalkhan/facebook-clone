import React, { useRef, useState } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import useClickOutside from 'helpers/clickOutside';

export type EmojiPickerProps = {
  isShowImg: boolean;
  onEmojiClick: (emoji: EmojiClickData) => void;
};

export const EmojiPicker: React.FC<EmojiPickerProps> = ({ isShowImg, onEmojiClick }) => {
  const [picker, setPicker] = useState(false);

  const emojiPickerRef = useRef<HTMLDivElement>(null);
  useClickOutside(emojiPickerRef, () => setPicker(false));

  return (
    <div className="emoji" data-has-image={isShowImg}>
      {picker && (
        <div className="emoji__picker" ref={emojiPickerRef}>
          <Picker onEmojiClick={onEmojiClick} height={350} />
        </div>
      )}

      {!isShowImg && <img src="../../../icons/colorful.png" alt="" />}

      <i
        className="emoji_icon_large"
        onClick={() => {
          setPicker(prev => !prev);
        }}
      ></i>
    </div>
  );
};
