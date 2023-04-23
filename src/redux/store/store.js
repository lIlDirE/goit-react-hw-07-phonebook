import { reducer } from './reducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
  } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);
