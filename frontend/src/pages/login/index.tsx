import React, { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { Footer } from 'components/atoms/footer';
import { RegisterForm, UserInfoType } from 'components/molecules/register-form';
import { LoginFormTypes } from 'components/molecules/login-form';
import { LoginUser } from 'components/organisms/login-user';
import { loginUser as loginUserAction } from './userLoginSlice';
import { registerUser as registerUserAction } from './userRegisterSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const handleRegisterForm = () => setVisible(!visible);

  const handleLoginSubmit = async (values: LoginFormTypes) => {
    dispatch(loginUserAction(values));
  };

  const handleRegisterSubmit = async (values: UserInfoType) => {
    dispatch(registerUserAction(values));
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginUser handleRegisterForm={handleRegisterForm} handleSubmit={handleLoginSubmit} />
        {visible && (
          <RegisterForm handleRegisterForm={handleRegisterForm} handleRegisterSubmit={handleRegisterSubmit} />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
