import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/atoms/icon';
export type Props = {
  user?: any;
};

export const ResetHeader: React.FC<Props> = ({ user }) => {
  return (
    <div className="a-reset-header">
      <div className="a-reset-header__logo-wrapper">
        <Icon name="facebook" />
      </div>
      {user ? (
        <div className="a-reset-header__right">
          <Link to="/profile">
            <img src={user.picture} alt="" />
          </Link>
          <button className="blue_btn">Logout</button>
        </div>
      ) : (
        <Link to="/login" className="a-reset-header__right">
          <button className="blue_btn">Login</button>
        </Link>
      )}
    </div>
  );
};
