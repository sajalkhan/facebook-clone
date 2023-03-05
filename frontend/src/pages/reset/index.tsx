import Cookies from 'js-cookie';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setLoginUser } from 'pages/login/userLoginSlice';

import { Footer } from 'components/atoms/footer';
import { ResetHeader } from 'components/atoms/reset-header';
import { SendEmailForm } from 'components/molecules/send-email-form';
import { SearchAccountForm } from 'components/molecules/search-account-form';
import { ChangePasswordForm } from 'components/molecules/change-password-form';
import { CodeVerificationForm } from 'components/molecules/code-verification-form';
import { userFindByMail, userSendResetPasswordCode, userValidateResetCode, userChangePassword } from 'api/userApi';

type UserInfoType = {
  email: string;
  picture: string;
};

enum ResetFormOrder {
  SearchAccount,
  SendEmail,
  VerificationCode,
  ChangePassword
}

const Reset = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [visibleForm, setVisibleForm] = useState<ResetFormOrder>(ResetFormOrder.SearchAccount);
  const { picture } = useAppSelector(state => state.login.response);

  const handleLogout = () => {
    Cookies.set('user', '');
    dispatch(
      setLoginUser({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        response: {},
        bYear: 1990,
        bMonth: 12,
        bDay: 1,
        gender: ''
      })
    );
    navigate('/login');
  };

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

  const handleVerificationCode = useCallback(async ({ code }) => {
    try {
      setError('');
      if (!userInfo) return;
      const response = await userValidateResetCode(userInfo.email, +code);
      if (typeof response !== 'string' && response?.message === 'ok') {
        setVisibleForm(ResetFormOrder.ChangePassword);
      } else {
        typeof response === 'string' && setError(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleChangePassword = useCallback(async ({ password }) => {
    try {
      setError('');
      if (!userInfo) return;
      const response = await userChangePassword(userInfo.email, password);
      if (typeof response !== 'string' && response?.message === 'ok') {
        navigate('/');
      } else {
        typeof response === 'string' && setError(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const renderFormComponent = () => {
    switch (visibleForm) {
      case ResetFormOrder.SearchAccount: {
        return <SearchAccountForm onSubmit={handleSearchAccount} error={error} />;
      }

      case ResetFormOrder.SendEmail: {
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
      }

      case ResetFormOrder.VerificationCode: {
        return <CodeVerificationForm error={error} onSubmit={handleVerificationCode} />;
      }

      case ResetFormOrder.ChangePassword: {
        return <ChangePasswordForm error={error} onSubmit={handleChangePassword} />;
      }

      default:
        return null;
    }
  };

  return (
    <div className="reset">
      <ResetHeader userImg={picture} onClick={handleLogout} />
      {renderFormComponent()}
      <Footer />
    </div>
  );
};

export default Reset;
