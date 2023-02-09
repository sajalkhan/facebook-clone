import { userRegister } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { registerInfo } from './userInfo.type';
import Cookies from 'js-cookie';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface registerState extends registerInfo {
  response: any;
  fetchRegisterStatus: ApiStatus;
}

const user = Cookies.get('user');
const initialState: registerState =
  user !== undefined
    ? JSON.parse(user)
    : {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        gender: '',
        response: {},
        bYear: new Date().getFullYear(),
        bMonth: new Date().getMonth() + 1,
        bDay: new Date().getDate(),
        fetchRegisterStatus: 'IDLE'
      };

export const registerUser = createAsyncThunk('user/register', userRegister);

export const register = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterUser: (state: registerState, action: PayloadAction<registerState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, state => {
      state.fetchRegisterStatus = 'PENDING';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.fetchRegisterStatus = 'SUCCESS';
      state.response = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.fetchRegisterStatus = 'ERROR';
      state.response = action.payload;
    });
  }
});

export const { setRegisterUser } = register.actions;

export default register.reducer;
