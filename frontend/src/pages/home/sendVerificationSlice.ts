import { userSendVerificationMail } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface sendVerificationMailState {
  response?: any;
  fetchVerificationMailStatus?: ApiStatus;
}

const initialState: any = {
  response: {},
  fetchVerificationMailStatus: 'IDLE'
};

export const sendVerificationMail = createAsyncThunk<any, any>('user/sendVerification', userSendVerificationMail);

export const SendVerification = createSlice({
  name: 'sendVerification',
  initialState,
  reducers: {
    setSendVerificationMail: (state: sendVerificationMailState, action: PayloadAction<sendVerificationMailState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(sendVerificationMail.pending, state => {
      state.fetchVerificationMailStatus = 'PENDING';
    });

    builder.addCase(sendVerificationMail.fulfilled, (state, action) => {
      const { payload } = action;
      state.fetchVerificationMailStatus = 'SUCCESS';
      state.response = payload;
    });

    builder.addCase(sendVerificationMail.rejected, state => {
      state.fetchVerificationMailStatus = 'ERROR';
    });
  }
});

export const { setSendVerificationMail } = SendVerification.actions;

export default SendVerification.reducer;
