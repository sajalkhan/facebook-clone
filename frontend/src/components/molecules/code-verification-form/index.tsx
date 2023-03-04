import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { LoginInput } from 'components/atoms/login-input';
import { Button } from 'components/atoms/button';
import { codeValidation } from './validation-schema';

interface CodeVerificationFormProps {
  onSubmit: (value: object) => void;
}

export const CodeVerificationForm: React.FC<CodeVerificationFormProps> = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCode(value);
  };

  return (
    <div className="code-verification_form">
      <div className="code-verification_form__header">Code verification</div>
      <div className="code-verification_form__text">Please enter the code that has been sent to your email.</div>

      <Formik initialValues={{ code }} validationSchema={codeValidation} onSubmit={onSubmit}>
        {() => (
          <Form>
            <LoginInput type="text" name="code" value={code} placeholder="Code" onChange={handleChange} />

            <div className="code-verification_form__button-wrapper">
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
