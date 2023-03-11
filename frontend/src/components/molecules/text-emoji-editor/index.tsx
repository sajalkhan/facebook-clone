import React, { useEffect, useRef, useState } from 'react';
import { EmojiPicker } from 'components/atoms/emoji-picker';
import { EmojiClickData } from 'emoji-picker-react';

export type TextEmojiEditorProps = {
  name: string;
  text: string;
  isShowImg: boolean;
  setText: (value: string) => void;
};

export const TextEmojiEditor: React.FC<TextEmojiEditorProps> = ({ name, text, setText, isShowImg }) => {
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
    currentTextRef?.focus();

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
    <div className="text-emoji-editor" data-has-image={isShowImg}>
      <div className="text-emoji-editor__input-wrapper">
        <textarea
          value={text}
          ref={textRef}
          maxLength={120}
          className="text-emoji-editor__input"
          placeholder={`What's on your mind, ${name}?`}
          onChange={e => setText(e.target.value)}
        ></textarea>
      </div>

      <div className="text-emoji-editor__emoji-wrapper">
        <EmojiPicker onEmojiClick={handleEmoji} isShowImg={isShowImg} />
      </div>
    </div>
  );
};
