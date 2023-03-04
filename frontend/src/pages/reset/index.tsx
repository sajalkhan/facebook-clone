// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from "js-cookie";
// import { useState } from 'react';
import { Footer } from 'components/atoms/footer';
import { ResetHeader } from 'components/atoms/reset-header';
import { CodeVerificationForm } from 'components/molecules/code-verification-form';

const Reset = () => {
  const handleResetCode = (value: object) => {
    console.log('reset code -- ', value);
  };

  return (
    <div className="reset">
      {/* <div className="reset_wrap">
        {visible === 0 && (
          <SearchAccount email={email} setEmail={setEmail} error={error} />
        )}
        {visible === 1 && <SendEmail user={user} />}
        {visible === 2 && (
          <CodeVerification
            user={user}
            code={code}
            setCode={setCode}
            error={error}
          />
        )}
      </div> */}
      <ResetHeader />
      <CodeVerificationForm onSubmit={handleResetCode} />
      <Footer />
    </div>
  );
};

export default Reset;
