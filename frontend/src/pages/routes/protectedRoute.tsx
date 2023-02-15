import { useAppSelector } from 'store/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import Login from 'pages/login';

export const LoggedInRoutes = () => {
  const { login } = useAppSelector(state => ({ ...state }));
  return login.fetchLoginStatus === 'SUCCESS' ? <Outlet /> : <Login />;
};

export const NotLoggedInRoutes = () => {
  const { login } = useAppSelector(state => ({ ...state }));
  return login.fetchLoginStatus !== 'SUCCESS' ? <Navigate to="/" /> : <Outlet />;
};
