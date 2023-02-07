import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from '@reduxjs/toolkit';
import { Footer } from 'components/atoms/footer';
import { RegisterForm, UserInfoType } from 'components/molecules/register-form';
import { LoginFormValues } from 'components/molecules/login-form';
import { LoginUser } from 'components/organisms/login-user';
import { loginUser as loginUserAction } from './userLoginSlice';
import { registerUser as registerUserAction } from './userRegisterSlice';
import { useAppSelector } from 'store/hooks';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterForm = () => setVisible(!visible);
  const registerSuccess = useAppSelector(state => state.register.fetchRegisterStatus === 'SUCCESS');

  const handleSubmit = async (values: LoginFormValues, actions: any) => {
    dispatch(loginUserAction(values) as unknown as AnyAction);
    actions.setSubmitting(false);
  };

  const handleRegisterSubmit = async (values: UserInfoType) => {
    dispatch(registerUserAction(values) as unknown as AnyAction);
    registerSuccess ?? navigate('/');
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginUser handleRegisterForm={handleRegisterForm} handleSubmit={handleSubmit} />
        {visible && (
          <RegisterForm handleRegisterForm={handleRegisterForm} handleRegisterSubmit={handleRegisterSubmit} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
