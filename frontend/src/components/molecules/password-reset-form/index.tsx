import React from 'react';
import { Form, Formik } from 'formik';
import { LoginInput } from 'components/atoms/login-input';
import { Button } from 'components/atoms/button';

interface PasswordResetFormProps {
  code: string;
  setCode: (value: string) => void;
  error: string | null;
  handleReset?: () => void;
}

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ code, setCode, error, handleReset }) => {
  return (
    <div className="reset-form">
      <div className="reset-form__header">Code verification</div>
      <div className="reset-form__text">Please enter the code that has been sent to your email.</div>
      <Formik
        initialValues={{ code }}
        onSubmit={() => {
          handleReset && handleReset();
        }}
      >
        {() => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
              placeholder="Code"
            />

            {typeof error === 'string' && <div className="error_text">{error}</div>}

            <div className="reset-form__button-wrapper">
              <Button size="small" modifiers="tertiary" href="/login">
                Cancel
              </Button>
              <Button modifiers="primary" size="small">
                Continue
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
