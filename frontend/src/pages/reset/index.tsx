import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { Footer } from 'components/atoms/footer';
import { ResetHeader } from 'components/atoms/reset-header';
import { SendEmailForm } from 'components/molecules/send-email-form';
import { SearchAccountForm } from 'components/molecules/search-account-form';
import { CodeVerificationForm } from 'components/molecules/code-verification-form';

enum ResetFormOrder {
  SendEmail = 1,
  SearchAccount = 0,
  VerificationCode = 2
}

const Reset = () => {
  const [visibleForm, setVisibleForm] = useState<ResetFormOrder>(ResetFormOrder.SearchAccount);
  const { picture } = useAppSelector(state => state.login.response);

  const handleResetCode = (value: object) => {
    console.log('reset code -- ', value);
    setVisibleForm(ResetFormOrder.SendEmail);
  };

  const formComponents = [
    <SearchAccountForm onSubmit={handleResetCode} />,
    <SendEmailForm userImg={picture} />,
    <CodeVerificationForm onSubmit={handleResetCode} />
  ];

  return (
    <div className="reset">
      <ResetHeader />
      {formComponents[visibleForm]}
      <Footer />
    </div>
  );
};

export default Reset;
