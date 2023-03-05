import { Button } from 'components/atoms/button';
import React from 'react';

export type SendEmailFormProps = {
  email: string;
  userImg: string;
};

const DEFAULT_IMAGE = process.env.REACT_APP_DEFAULT_IMAGE;
export const SendEmailForm: React.FC<SendEmailFormProps> = ({ email, userImg = DEFAULT_IMAGE }) => {
  return (
    <div className="send-email_form">
      <div className="send-email_form__header">Reset Your Password</div>

      <div className="send-email_form__container">
        <div className="send-email_form__container--left">
          <div className="send-email_form__text">How do you want to receive the code to reset your password?</div>
          <label htmlFor="email">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="send-email_form__container--info">
              <span>Send code via email</span>
              <span>{email}</span>
            </div>
          </label>
        </div>

        <div className="send-email_form__container--right">
          <img src={userImg} alt="" />
          <span>{email}</span>
          <span>Facebook user</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="send-email_form__button-wrapper">
        <Button size="small" modifiers="tertiary" href="/login">
          Not you?
        </Button>
        <Button type="submit" modifiers="primary" size="small">
          Continue
        </Button>
      </div>
    </div>
  );
};
