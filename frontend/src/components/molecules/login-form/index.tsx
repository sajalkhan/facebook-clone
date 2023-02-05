import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Icon } from 'components/atoms/icon';
import LoginInput from 'components/atoms/login-input';
import { loginValidation } from './form-validation';
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
  handleRegister: () => void;
  handleSubmit: (values: LoginFormValues, actions: any) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ handleRegister, handleSubmit }) => {
  const [login, setLogin] = useState<LoginFormValues>(initialValues);
  const { email, password } = login;

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <div className="login_wrap">
      <div className="login_1">
        <div className="icon-wrapper">
          <Icon iconName="facebook" />
        </div>
        <span>Facebook helps you connect and share with the people in your life.</span>
      </div>
      <div className="login_2">
        <div className="login_2_wrap">
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

          <Link to="/forgot" className="forgot_password">
            Forgotten password?
          </Link>
          <div className="sign_splitter"></div>
          <Button modifiers="secondary" size="medium" onClick={handleRegister}>
            Create Account
          </Button>
        </div>
        <Link to="/" className="sign_extra">
          <b>Create a Page</b> for a celebrity, brand or business.
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
