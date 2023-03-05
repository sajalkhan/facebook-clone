import { useCallback, useState } from 'react';
import { Footer } from 'components/atoms/footer';
import { ResetHeader } from 'components/atoms/reset-header';
import { SendEmailForm } from 'components/molecules/send-email-form';
import { SearchAccountForm } from 'components/molecules/search-account-form';
import { CodeVerificationForm } from 'components/molecules/code-verification-form';
import { userFindByMail, userSendResetPasswordCode } from 'api/userApi';

type UserInfoType = {
  email: string;
  picture: string;
};

enum ResetFormOrder {
  SearchAccount,
  SendEmail,
  VerificationCode
}

const Reset = () => {
  const [error, setError] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [visibleForm, setVisibleForm] = useState<ResetFormOrder>(ResetFormOrder.SearchAccount);

  const handleSearchAccount = useCallback(async ({ email }) => {
    try {
      setError('');
      const response = await userFindByMail(email);

      if (typeof response !== 'string' && response?.message?.includes('success')) {
        setUserInfo({ email: response.email, picture: response.picture });
        setVisibleForm(ResetFormOrder.SendEmail);
      } else {
        typeof response === 'string' && setError(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSendResetCode = useCallback(async (email: string) => {
    try {
      setError('');
      const response = await userSendResetPasswordCode(email);

      if (typeof response !== 'string' && response?.message?.includes('success')) {
        setVisibleForm(ResetFormOrder.VerificationCode);
      } else {
        typeof response === 'string' && setError(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleResetCode = useCallback(async ({ code }) => {
    try {
      console.log('code -- ', code);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderFormComponent = () => {
    switch (visibleForm) {
      case ResetFormOrder.SearchAccount:
        return <SearchAccountForm onSubmit={handleSearchAccount} error={error} />;

      case ResetFormOrder.SendEmail:
        if (!userInfo) {
          return null;
        }

        return (
          <SendEmailForm
            email={userInfo.email}
            userImg={userInfo.picture}
            error={error}
            onClick={handleSendResetCode}
          />
        );

      case ResetFormOrder.VerificationCode:
        return <CodeVerificationForm onSubmit={handleResetCode} />;

      default:
        return null;
    }
  };

  return (
    <div className="reset">
      <ResetHeader />
      {renderFormComponent()}
      <Footer />
    </div>
  );
};

export default Reset;
