import React, { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams } from 'react-router-dom';
import { accountVerified } from './userVerifiedSlice';
import { ActivateForm } from 'components/atoms/activate-form';
import { useNavigate } from 'react-router-dom';

interface ActivateProps {
  children: React.ReactNode;
}

const Activate: React.FC<ActivateProps> = ({ children }) => {
  const { token } = useParams<{ token: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userToken = useAppSelector(state => state.verified?.response?.token);
  const response = useAppSelector(state => state.verified?.response);

  const getResponseType = useCallback(() => {
    if (response) {
      setTimeout(() => {
        navigate('/');
      }, 3000);

      if (typeof response === 'string') {
        return response?.includes('success') ? 'success' : 'error';
      } else if (response.message?.includes('successfully')) {
        return 'success';
      }
    }
  }, [response, navigate]);

  const activateAccount = useCallback(
    (token: string) => {
      if (userToken) {
        dispatch(accountVerified({ token, userToken }));
      }
    },
    [dispatch, userToken]
  );

  useEffect(() => {
    if (token) {
      activateAccount(token);
    }
  }, [token, activateAccount]);

  const responseType = getResponseType();

  return (
    <div className="activate">
      <ActivateForm
        type={responseType}
        header={`Account verification ${responseType === 'success' ? 'succeeded' : 'failed'}`}
        text={typeof response === 'string' ? response : response?.message}
        loading
      />

      {children}
    </div>
  );
};

export default Activate;
