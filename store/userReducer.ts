import { RootState } from './index';
import { loginRequest } from './../api/types/types';
import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { loginApi } from '../api';

const reducerName = 'userReducer';

type stateType = {
  username: string;
  token: string;
};

const initialState: stateType = {
  username: '',
  token: '',
};

export const loginThunk = createAsyncThunk(`${reducerName}/login`, async (request: loginRequest, thunkApi) => {
  try {
    console.log("loginThunk pending");
    return await loginApi(request);
  } catch (e) {
    return thunkApi.rejectWithValue(await e.response.data);
  }
})

export const userSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setToken: (state: stateType, action: PayloadAction<{ token: string }>) => {
      global.token = action.payload.token;
      state.token = action.payload.token;
    },
  },
  extraReducers: {
    [loginThunk.fulfilled.type]: (state: stateType, action: PayloadAction<{ token: string }>) => {
      console.log(loginThunk.fulfilled);
      state.token = action.payload.token;
    },
    [loginThunk.rejected.type]: (state: stateType, action: PayloadAction<{ message: string, status: number }>) => {
      state.token = "";
    }
  },
});

const tokenState = (state: RootState) => state.userReducer.token;

export const getTokenState = createSelector(tokenState, token => token);

export const { setToken } = userSlice.actions;

export default userSlice.reducer;


