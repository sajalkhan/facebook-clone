import React from 'react';
import LoginForm, { LoginFormValues } from 'components/molecules/login-form';
import Footer from 'components/atoms/footer';
import { useDispatch } from 'react-redux';
import { loginUser } from './userLoginSlice';
import { AnyAction } from '@reduxjs/toolkit';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values: LoginFormValues, actions: any) => {
    await dispatch(loginUser(values) as unknown as AnyAction);
    actions.setSubmitting(false);
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm handleSubmit={handleSubmit} />
        <div className="register"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
