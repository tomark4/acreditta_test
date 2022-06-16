import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import marvelReducer from '../store/marvelSlice';

// redux configuration store

export const store = configureStore({
  reducer: {
    marvel: marvelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
