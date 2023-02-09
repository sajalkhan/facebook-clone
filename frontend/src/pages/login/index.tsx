import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registerSuccess = useAppSelector(state => state.register.fetchRegisterStatus === 'SUCCESS');
  const loginSuccess = useAppSelector(state => state.login.fetchLoginStatus === 'SUCCESS');
  const registerResponse = useAppSelector(state => state.register.response);
  const loginResponse = useAppSelector(state => state.login.response);

  const handleRegisterForm = () => setVisible(!visible);

  const handleSubmit = async (values: LoginFormValues) => {
    dispatch(loginUserAction(values));

    if (loginSuccess) {
      Cookies.set('user', JSON.stringify(loginResponse));
      navigate('/');
    }
  };

  const handleRegisterSubmit = async (values: UserInfoType) => {
    dispatch(registerUserAction(values) as unknown as AnyAction);
    if (registerSuccess) {
      Cookies.set('user', JSON.stringify(registerResponse));
      navigate('/');
    }
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
