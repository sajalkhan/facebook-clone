import React from 'react';
import { Icon } from 'components/atoms/icon';
import { LoginForm } from 'components/molecules/login-form';
import { LoginFormTypes } from 'components/molecules/login-form';

type LoginUserProps = {
  handleRegisterForm: () => void;
  handleSubmit: (values: LoginFormTypes) => void;
};

export const LoginUser: React.FC<LoginUserProps> = ({ handleRegisterForm, handleSubmit }) => {
  return (
    <div className="o-login-user">
      <div className="o-login-user__container">
        <div className="o-login-user__icon">
          <Icon name="facebook" color="duskyBlue" />
        </div>
        <span className="o-login-user__text">Facebook helps you connect and share with the people in your life.</span>
      </div>
      {/* login form */}
      <LoginForm handleRegisterForm={handleRegisterForm} handleSubmit={handleSubmit} />
    </div>
  );
};
