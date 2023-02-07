import { configureStore } from '@reduxjs/toolkit';
import userLoginReducer from 'pages/login/userLoginSlice';
import userRegisterReducer from 'pages/login/userRegisterSlice';

export const store = configureStore({
  reducer: {
    login: userLoginReducer,
    register: userRegisterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
