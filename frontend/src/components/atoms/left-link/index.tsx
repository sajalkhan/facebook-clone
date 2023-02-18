import React from 'react';

interface Props {
  image: string;
  text: string;
  notification?: string;
}

export const LeftLink: React.FC<Props> = ({ image, text, notification }) => {
  const imageSource = require(`assets/left/${image}.png`);

  return (
    <div className="left-link">
      <img src={imageSource} alt="" />
      {notification && (
        <div className="left-link__notification">
          <div className="left-link__notification--text">{text}</div>
          <div className="left-link__notification--icon">{notification}</div>
        </div>
      )}
      {!notification && <span className="left-link__text">{text}</span>}
    </div>
  );
};
