import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { User } from '../../app/services/auth';
// import type { RootState } from '../../app/store';
import { toast } from 'react-toastify';

const authState = {
  user: null, //object
  token: null //string
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setCredentials: (state, action) => {
      console.log('action.payload', action.payload);
      const { token } = action.payload;
      console.log('token,email', token, action.payload);
      state.token = token;
      state.user = action.payload;
      toast.success('Yes!! you are logged in');
    },
    logOut: (state, action) => {
      state.token = null;
      state.user = null;
      toast.error('Logged out');
      localStorage.removeItem('token');
    }
  }
});

// Action creators
export const { setCredentials, logOut } = authSlice.actions;

// store needs to pick this reducer up
export default authSlice.reducer;

// A selector for the user and token created
// export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
// ---------------- ------------------------------
// ----------------------------------------------
// DavidGray
// ==============================================
// import { createSlice } from '@reduxjs/toolkit';

// * REDUCERS
//*----------------------------------
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: { token: null },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { accessToken } = action.payload;
//       state.token = accessToken;
//     },
//     logOut: (state, action) => {
//       state.token = null;
//     }
//   }
// });

// Action creators
// export const { setCredentials, logOut } = authSlice.actions;

// This reducer goes to the store
// export default authSlice.reducer;

// A selector for the token created
// export const selectCurrentToken = (state) => state.auth.token;
