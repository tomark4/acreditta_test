import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import marvelReducer from '../store/marvelSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// redux configuration store
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  marvel: marvelReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
})

// export const store = configureStore({
//   reducer: {
//     marvel: marvelReducer,
//   },
// });

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
