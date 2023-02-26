import Cookies from 'js-cookie';
import { userActivate } from 'api/userApi';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

type ApiStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';

export interface verifiedState {
  response?: any;
  fetchActivateStatus?: ApiStatus;
}

interface ActivatePayload {
  token: string;
  userToken: string;
}

const user = Cookies.get('user');
const initialState: any = {
  response: user ? JSON.parse(user) : {},
  fetchActivateStatus: 'IDLE'
};

export const accountVerified = createAsyncThunk<any, ActivatePayload>('user/activate', async ({ token, userToken }) => {
  try {
    const response = await userActivate(token, userToken);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

export const VerifiedAccount = createSlice({
  name: 'verifiedAccount',
  initialState,
  reducers: {
    setVerifiedAccount: (state: verifiedState, action: PayloadAction<verifiedState>) => {
      return {
        ...state,
        ...action.payload
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(accountVerified.pending, state => {
      state.fetchActivateStatus = 'PENDING';
    });

    builder.addCase(accountVerified.fulfilled, (state, action) => {
      const { payload } = action;
      state.fetchActivateStatus = 'SUCCESS';

      const user = JSON.parse(Cookies.get('user') || '{}');
      const isSuccessful =
        (typeof payload === 'string' && payload.includes('success')) || payload?.message?.includes('successfully');
      if (isSuccessful) {
        Cookies.set('user', JSON.stringify({ ...user, verified: true }));
      }

      state.response = payload;
    });

    builder.addCase(accountVerified.rejected, state => {
      state.fetchActivateStatus = 'ERROR';
    });
  }
});

export const { setVerifiedAccount } = VerifiedAccount.actions;

export default VerifiedAccount.reducer;
