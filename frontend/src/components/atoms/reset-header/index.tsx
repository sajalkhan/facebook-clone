import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/atoms/icon';
import { Button } from 'components/atoms/button';

export type Props = {
  userImg?: any;
  onClick?: () => void;
};

export const ResetHeader: React.FC<Props> = ({ userImg, onClick }) => {
  return (
    <div className="a-reset-header">
      <Link to="/login">
        <Icon name="facebook" height={50} width={160} color="duskyBlue" />
      </Link>
      {userImg ? (
        <div className="a-reset-header__right">
          <Link to="/profile">
            <img src={userImg} alt="" />
          </Link>
          <Button modifiers="primary" size="small" onClick={onClick}>
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/login" className="a-reset-header__right">
          <Button modifiers="primary" size="small">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};
