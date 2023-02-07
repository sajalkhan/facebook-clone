import { userRegister } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { registerInfo } from './userInfo.type';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface registerState extends registerInfo {
  response: any;
  fetchRegisterStatus: ApiStatus;
}

const initialState: registerState = {
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
    setFirstName: (state: registerState, action: PayloadAction<string>) => {
      state.first_name = action.payload;
    },
    setLastName: (state: registerState, action: PayloadAction<string>) => {
      state.last_name = action.payload;
    },
    setEmail: (state: registerState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: registerState, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setGender: (state: registerState, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setBirthYear: (state: registerState, action: PayloadAction<number>) => {
      state.bYear = action.payload;
    },
    setBirthMont: (state: registerState, action: PayloadAction<number>) => {
      state.bMonth = action.payload;
    },
    setBirthDay: (state: registerState, action: PayloadAction<number>) => {
      state.bDay = action.payload;
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

export const { setFirstName, setLastName, setEmail, setPassword, setGender, setBirthDay, setBirthMont, setBirthYear } =
  register.actions;

export default register.reducer;
