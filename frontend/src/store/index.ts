import { configureStore } from '@reduxjs/toolkit';
import userLoginReducer from 'pages/login/userLoginSlice';
import userRegisterReducer from 'pages/login/userRegisterSlice';
import VerifiedAccountReducer from 'pages/activate/userVerifiedSlice';

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
    register: userRegisterReducer,
    verified: VerifiedAccountReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
