import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'components/atoms/button';
import { LoginInput } from 'components/atoms/login-input';
import { validatePasswordSchema } from './validation-schema';

type LoginFormTypes = {
  password: string;
  conf_password: string;
};

const initialValues: LoginFormTypes = {
  password: '',
  conf_password: ''
};

interface ChangePasswordFormProps {
  error?: string;
  onSubmit: (value: object) => void;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ error, onSubmit }) => {
  const [confirmPassword, setConfirmPassword] = useState<LoginFormTypes>(initialValues);
  const { password, conf_password } = confirmPassword;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setConfirmPassword({ ...confirmPassword, [name]: value });
  };

  return (
    <div className="change-password_form">
      <div className="change-password_form__header">Change Password</div>
      <div className="change-password_form__text">Pick a strong password</div>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validatePasswordSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <LoginInput
              type="password"
              name="password"
              value={password}
              placeholder="New password"
              onChange={handleChange}
            />

            <LoginInput
              type="password"
              name="conf_password"
              value={conf_password}
              placeholder="Confirm New password"
              onChange={handleChange}
              bottom
            />

            {error && <div className="error_text">{error}</div>}

            <div className="change-password_form__button-wrapper">
              <Button size="small" modifiers="tertiary" href="/login">
                Cancel
              </Button>
              <Button type="submit" modifiers="primary" size="small">
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
