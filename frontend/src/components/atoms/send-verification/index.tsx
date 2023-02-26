import React from 'react';

export type SendVerificationProps = {
  response?: string;
  onClick: () => void;
};

export const SendVerification: React.FC<SendVerificationProps> = ({ onClick, response }) => {
  return (
    <div className="a-send-verification">
      <span>Your account is not verified,verify your account before it gets deleted after a month from creating.</span>
      <a onClick={onClick} className="a-send-verification__link">
        click here to resend verification link
      </a>
      {response && <div className="a-send-verification__response">{response}</div>}
    </div>
  );
};
