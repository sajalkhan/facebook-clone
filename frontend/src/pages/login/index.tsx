import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';
import { Footer } from 'components/atoms/footer';
import RegisterForm from 'components/molecules/register-form';
import { LoginFormValues } from 'components/molecules/login-form';
import { LoginUser } from 'components/organisms/login-user';
import { loginUser as loginUserAction } from './userLoginSlice';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleRegisterForm = () => setVisible(!visible);

  const handleSubmit = async (values: LoginFormValues, actions: any) => {
    await dispatch(loginUserAction(values) as unknown as AnyAction);
    actions.setSubmitting(false);
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginUser handleRegisterForm={handleRegisterForm} handleSubmit={handleSubmit} />
        {visible && <RegisterForm handleRegister={handleRegisterForm} />}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
