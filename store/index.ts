import userReducer  from './userReducer';
import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction
} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userReducer
    },
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<String>>;