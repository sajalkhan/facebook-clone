import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginValidation } from './form-validation';
import { LoginInput } from 'components/atoms/login-input';
import { Button } from 'components/atoms/button';

export interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: '',
  password: ''
};

type LoginFormProps = {
  handleRegisterForm: () => void;
  handleSubmit: (values: LoginFormValues, actions: any) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ handleRegisterForm, handleSubmit }) => {
  const [login, setLogin] = useState<LoginFormValues>(initialValues);
  const { email, password } = login;

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

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
                password={password}
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
