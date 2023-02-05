import { userLogin } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { loginInfo } from './user.types';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface loginState extends loginInfo {
  currentUser: any;
  fetchLoginStatus: ApiStatus;
}

const initialState: loginState = {
  email: '',
  password: '',
  currentUser: {},
  fetchLoginStatus: 'IDLE'
};

export const loginUser = createAsyncThunk('user/login', userLogin);

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state: loginState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: loginState, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.fetchLoginStatus = 'PENDING';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.fetchLoginStatus = 'SUCCESS';
      state.currentUser = action.payload;
    });
    builder.addCase(loginUser.rejected, state => {
      state.fetchLoginStatus = 'ERROR';
    });
  }
});

export const { setEmail, setPassword } = login.actions;

export default login.reducer;
