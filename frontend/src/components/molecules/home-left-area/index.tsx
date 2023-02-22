import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLeftData } from 'constants/home';
import { LeftLink } from 'components/atoms/left-link';

interface Props {
  userImg?: string;
  firstName: string;
  lastName: string;
}

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const HomeLeftArea: React.FC<Props> = ({ userImg = DEFAULT_IMAGE, firstName, lastName }) => {
  const userInfo = `${firstName} ${lastName}`;

  return (
    <div className="home-left-area">
      <Link to="/profile" className="home-left-area__link">
        <img src={userImg} alt={userInfo} className="home-left-area__link--img" />
        <span className="home-left-area__link--text">{userInfo}</span>
      </Link>

      {HomeLeftData.slice(0, 8).map((link, index) => (
        <LeftLink key={index} image={link.img} text={link.text} notification={link.notification} />
      ))}
    </div>
  );
};
