import { Footer } from 'components/atoms/footer';
import { ResetHeader } from 'components/atoms/reset-header';
import { CodeVerificationForm } from 'components/molecules/code-verification-form';
import { SearchAccountForm } from 'components/molecules/search-account-form';
import { SendEmailForm } from 'components/molecules/send-email-form';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks';

enum ResetFormOrder {
  SendEmail = 1,
  SearchAccount = 0,
  VerificationCode = 2
}

const Reset = () => {
  const [visibleFormIndx, setShowVisibleForm] = useState<ResetFormOrder>(ResetFormOrder.SearchAccount);
  const { picture } = useAppSelector(state => state.login.response);

  const handleResetCode = (value: object) => {
    console.log('reset code -- ', value);
    setShowVisibleForm(ResetFormOrder.SendEmail);
  };

  const forms = [
    <SearchAccountForm onSubmit={handleResetCode} />,
    <SendEmailForm userImg={picture} />,
    <CodeVerificationForm onSubmit={handleResetCode} />
  ];

  return (
    <div className="reset">
      <ResetHeader />
      {forms[visibleFormIndx]}
      <Footer />
    </div>
  );
};

export default Reset;
