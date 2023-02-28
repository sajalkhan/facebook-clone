import { useAppSelector } from 'store/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import Login from 'pages/login';

export const LoggedInRoutes = () => {
  const { login } = useAppSelector(state => ({ ...state }));

  console.log('login 1 -- ', login);
  return login.response?.message ? <Outlet /> : <Login />;
};

export const NotLoggedInRoutes = () => {
  const { login } = useAppSelector(state => ({ ...state }));
  console.log('login 2 -- ', login);

  return login.response?.message ? <Navigate to="/" /> : <Outlet />;
};
