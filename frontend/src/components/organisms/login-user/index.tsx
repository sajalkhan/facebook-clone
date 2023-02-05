import React from 'react';
import { Icon } from 'components/atoms/icon';
import { LoginForm } from 'components/molecules/login-form';
import { LoginFormValues } from 'components/molecules/login-form';

type LoginUserProps = {
  handleRegisterForm: () => void;
  handleSubmit: (values: LoginFormValues, actions: any) => void;
};

export const LoginUser: React.FC<LoginUserProps> = ({ handleRegisterForm, handleSubmit }) => {
  return (
    <div className="m-login-user">
      <div className="m-login-user__container">
        <div className="m-login-user__icon">
          <Icon iconName="facebook" />
        </div>
        <span className="m-login-user__text">Facebook helps you connect and share with the people in your life.</span>
      </div>
      {/* login form */}
      <LoginForm handleRegisterForm={handleRegisterForm} handleSubmit={handleSubmit} />
    </div>
  );
};
