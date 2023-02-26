import React from 'react';

export type SendVerificationProps = {
  success: string;
  error: string;
  onClick: () => void;
};

export const SendVerification: React.FC<SendVerificationProps> = ({ onClick, success, error }) => {
  return (
    <div className="a-send-verification">
      <span>Your account is not verified,verify your account before it gets deleted after a month from creating.</span>
      <a onClick={onClick} className="a-send-verification__link">
        click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
};
