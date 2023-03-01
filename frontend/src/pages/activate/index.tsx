import React, { useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { accountVerified } from './userVerifiedSlice';
import { setLoginUser } from 'pages/login/userLoginSlice';
import { ActivateForm } from 'components/atoms/activate-form';

interface ActivateProps {
  children: React.ReactNode;
}

const Activate: React.FC<ActivateProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const userInfo = useAppSelector(state => state.login);
  const userToken = useAppSelector(state => state.verified?.response?.token);
  const response = useAppSelector(state => state.verified?.response);
  const isSuccessResponse =
    (typeof response === 'string' && response.includes('success')) || response?.message?.includes('success');

  const activateAccount = useCallback(() => {
    if (token && userToken && isSuccessResponse) {
      dispatch(accountVerified({ token, userToken }));
      dispatch(setLoginUser({ ...userInfo, response: { ...userInfo.response, verified: true } }));
    }
  }, [dispatch, token, userToken]);

  useEffect(() => {
    activateAccount();
  }, [activateAccount]);

  useEffect(() => {
    if (!response) return;

    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [response, navigate, dispatch, userInfo]);

  const responseType = isSuccessResponse ? 'success' : 'error';

  return (
    <div className="activate">
      <ActivateForm
        type={responseType}
        header={`Account verification ${responseType === 'success' ? 'succeeded' : 'failed'}`}
        text={typeof response === 'string' ? response : response?.message}
        loading={!response}
      />

      {children}
    </div>
  );
};

export default Activate;
