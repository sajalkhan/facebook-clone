import Cookies from 'js-cookie';
import { userLogin } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loginInfo, registerInfo } from './userInfo.type';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface loginState extends loginInfo, registerInfo {
  response?: any;
  fetchLoginStatus?: ApiStatus;
}

const user = Cookies.get('user');
const initialState: loginState =
  user !== undefined
    ? JSON.parse(user)
    : {
        email: '',
        password: '',
        response: {},
        fetchLoginStatus: 'IDLE'
      };

export const loginUser = createAsyncThunk('user/login', userLogin);

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginUser: (state: loginState, action: PayloadAction<loginState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.fetchLoginStatus = 'PENDING';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.fetchLoginStatus = 'SUCCESS';
      state.response = action.payload;
    });
    builder.addCase(loginUser.rejected, state => {
      state.fetchLoginStatus = 'ERROR';
    });
  }
});

export const { setLoginUser } = login.actions;

export default login.reducer;
