import { User } from './../data/types';
import { RootState } from './index';
=import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';

const reducerName = 'friendReducer';

type stateType = {
  friendList: Array<User>;
};

const initialState: stateType = {
  friendList: [],
};

// export const loginThunk = createAsyncThunk(`${reducerName}/login`, async (request: loginRequest, thunkApi) => {
//   try {
//     console.log("loginThunk pending");
//     return await loginApi(request);
//   } catch (e) {
//     return thunkApi.rejectWithValue(await e.response.data);
//   }
// })

export const friendSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setFriendList: (state: stateType, action: PayloadAction<{ friendList: Array<User> }>) => {
      state.friendList = action.payload.friendList;
    },
  },
  // extraReducers: {
  //   [loginThunk.fulfilled.type]: (state: stateType, action: PayloadAction<{ token: string }>) => {
  //     console.log(loginThunk.fulfilled);
  //     state.token = action.payload.token;
  //   },
  //   [loginThunk.rejected.type]: (state: stateType, action: PayloadAction<{ message: string, status: number }>) => {
  //     state.token = "";
  //   }
  // },
});

const tokenState = (state: RootState) => state.userReducer.token;

export const getTokenState = createSelector(tokenState, token => token);

export const { setFriendList } = friendSlice.actions;

export default friendSlice.reducer;


