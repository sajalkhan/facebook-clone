import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { Footer } from 'components/atoms/footer';
import { RegisterForm, UserInfoType } from 'components/molecules/register-form';
import { LoginFormTypes } from 'components/molecules/login-form';
import { LoginUser } from 'components/organisms/login-user';
import { loginUser as loginUserAction } from './userLoginSlice';
import { registerUser as registerUserAction } from './userRegisterSlice';
import { useAppSelector } from 'store/hooks';
import { ROUTES } from 'constants/routes';

const Login: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerResponse = useAppSelector(state => state.register.response);
  const loginResponse = useAppSelector(state => state.login.response);

  const handleRegisterForm = () => setVisible(!visible);

  const handleRegisterSuccess = () => {
    if (registerResponse) {
      Cookies.set('user', JSON.stringify(registerResponse));
      navigate(ROUTES.HOME);
    }
  };

  const handleSubmit = async (values: LoginFormTypes) => {
    dispatch(loginUserAction(values)).then(() => {
      Cookies.set('user', JSON.stringify(loginResponse));
      navigate(ROUTES.HOME);
    });
  };

  const handleRegisterSubmit = async (values: UserInfoType) => {
    dispatch(registerUserAction(values)).then(() => {
      handleRegisterSuccess();
    });
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
