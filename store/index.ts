import userReducer  from './userReducer';
import friendReducer from './friendReducer';
import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction
} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userReducer,
        friendReducer
    },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>;