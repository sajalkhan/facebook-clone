import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'components/atoms/button';
import { LoginInput } from 'components/atoms/login-input';
import { searchAccountValidation } from './validation-schema';

interface SearchAccountFormProps {
  onSubmit: (value: object) => void;
}

export const SearchAccountForm: React.FC<SearchAccountFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="search-account_form">
      <div className="search-account_form__header">Find Your Account</div>
      <div className="search-account_form__text">
        Please enter your email address or mobile number to search for your account.
      </div>

      <Formik
        enableReinitialize
        initialValues={{ email }}
        validationSchema={searchAccountValidation}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <LoginInput
              type="text"
              name="email"
              value={email}
              placeholder="Email address or phone number"
              onChange={handleChange}
            />

            <div className="search-account_form__button-wrapper">
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
