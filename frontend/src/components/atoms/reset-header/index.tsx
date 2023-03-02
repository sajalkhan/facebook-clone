import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/atoms/icon';
import { Button } from 'components/atoms/button';

export type Props = {
  userImg?: any;
};

export const ResetHeader: React.FC<Props> = ({ userImg }) => {
  return (
    <div className="a-reset-header">
      <Icon name="facebook" height={50} width={160} color="duskyBlue" />
      {userImg ? (
        <div className="a-reset-header__right">
          <Link to="/profile">
            <img src={userImg} alt="" />
          </Link>
          <Button modifiers="primary" size="small">
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
