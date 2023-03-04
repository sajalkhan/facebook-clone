import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginValidation } from './validation-schema';
import { LoginInput } from 'components/atoms/login-input';
import { Button } from 'components/atoms/button';
import { DotLoader } from 'react-spinners';
import { useAppSelector } from 'store/hooks';

export interface LoginFormTypes {
  email: string;
  password: string;
}

const initialValues: LoginFormTypes = {
  email: '',
  password: ''
};

type LoginFormProps = {
  handleRegisterForm: () => void;
  handleSubmit: (values: LoginFormTypes) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ handleRegisterForm, handleSubmit }) => {
  const [login, setLogin] = useState<LoginFormTypes>(initialValues);
  const { email, password } = login;

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginPending = useAppSelector(state => state.login.fetchLoginStatus === 'PENDING');
  const response = useAppSelector(state => state.login.response);

  return (
    <div className="m-login-form">
      <div className="m-login-form__container">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <LoginInput
                type="text"
                name="email"
                value={email}
                placeholder="Email address or phone number"
                onChange={handleLoginChange}
              />
              <LoginInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleLoginChange}
                bottom
              />
              <Button modifiers="primary" type="submit">
                Log In
              </Button>
            </Form>
          )}
        </Formik>

        <Link to="/forgot" className="m-login-form__forgot-pass">
          Forgotten password?
        </Link>

        <DotLoader color="#1876f2" loading={loginPending} size={30} />
        {response && typeof response === 'object' ? (
          <span className="success_text">{response.message}</span>
        ) : (
          <span className="error_text">{response}</span>
        )}

        <div className="m-login-form__divider"></div>
        <Button modifiers="secondary" size="medium" onClick={handleRegisterForm}>
          Create Account
        </Button>
      </div>
      <Link to="/" className="m-login-form__sign-extra">
        <b>Create a Page</b> for a celebrity, brand or business.
      </Link>
    </div>
  );
};
