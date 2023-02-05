import React, { useState } from 'react';
import LoginForm, { LoginFormValues } from 'components/molecules/login-form';
import RegisterForm from 'components/molecules/register-form';
import Footer from 'components/atoms/footer';
import { useDispatch } from 'react-redux';
import { loginUser } from './userLoginSlice';
import { AnyAction } from '@reduxjs/toolkit';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values: LoginFormValues, actions: any) => {
    await dispatch(loginUser(values) as unknown as AnyAction);
    actions.setSubmitting(false);
  };

  const handleRegister = () => setVisible(!visible);

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm handleRegister={handleRegister} handleSubmit={handleSubmit} />
        {visible && <RegisterForm handleRegister={handleRegister} />}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
