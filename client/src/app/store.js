//1ST STEP IN SETTING UP RTK IS SET UP THE STORE
import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from './api/apiSlice';
import { api } from './services/api'

import {setupListeners} from '@reduxjs/toolkit/query'
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer
  },
  // devTools:true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch)

