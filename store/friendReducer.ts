import { getFriedListRequest } from './../api/types/types';
import { User } from './../data/types';
import { RootState } from './index';
import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { getFriendListApi } from '../api/userApi';

const reducerName = 'friendReducer';

type stateType = {
  friendList: Array<User>;
};

const initialState: stateType = {
  friendList: [],
};

export const getFriendListThunk = createAsyncThunk(`${reducerName}/friend`, async (request: getFriedListRequest, thunkApi) => {
  try {
    console.log("getFriendListThunk pending");
    return await getFriendListApi(request);
  } catch (e) {
    return thunkApi.rejectWithValue(await e.response.data);
  }
})

export const friendSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setFriendList: (state: stateType, action: PayloadAction<{ friendList: Array<User> }>) => {
      state.friendList = action.payload.friendList;
    },
  },
  extraReducers: {
    [getFriendListThunk.fulfilled.type]: (state: stateType, action: PayloadAction<{ friendList: Array<User> }>) => {
      console.log(getFriendListThunk.fulfilled);
      console.log(action.payload.friendList);
      state.friendList = action.payload.friendList;
    },
    [getFriendListThunk.rejected.type]: (state: stateType, action: PayloadAction<{ message: string, status: number }>) => {
      state.friendList = [];
    }
  },
});

const friendList = (state: RootState) => state.friendReducer.friendList;

export const friendListSelector = createSelector(friendList, friendList => friendList);

export const { setFriendList } = friendSlice.actions;

export default friendSlice.reducer;


