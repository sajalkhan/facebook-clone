import React from 'react';
import { Dots, NewRoom, Search } from 'assets/svg';

interface Props {
  userImg?: string;
  firstName: string;
  lastName: string;
}

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;

export const HomeRightArea: React.FC<Props> = ({ userImg = DEFAULT_IMAGE, firstName, lastName }) => {
  const color = '#65676b';

  return (
    <div className="home-right-area">
      <div className="home-right-area__heading">Sponsored</div>
      <div className="divider"></div>

      <div className="home-right-area__wrapper">
        <div className="home-right-area__header">
          <div className="home-right-area__header--left">Contacts</div>
          <div className="home-right-area__header--right">
            <div className="home-right-area__icon">
              <NewRoom color={color} />
            </div>
            <div className="home-right-area__icon">
              <Search color={color} />
            </div>
            <div className="home-right-area__icon">
              <Dots color={color} />
            </div>
          </div>
        </div>

        <div className="home-right-area__contacts-list">
          <div className="home-right-area__contact hover3">
            <div className="home-right-area__contact-img">
              <img src={userImg} alt="" />
            </div>
            <span>
              {firstName} {lastName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
