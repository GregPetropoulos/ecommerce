import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// ! TWO WAYS FOR PERSISTENT USER ON RELOADING THE PAGE. MUST STORE THE USER IN LOCAL STORAGE OR BUILD OUT REFRESH TOKEN WITH BACKEND SEE DG


//The local storage allows the user to not be logged out when refreshing safely
const user = JSON.parse(localStorage.getItem('user'));
const authState = {
  user:user?user:null, //object
  //token:null //string
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setCredentials: (state, action) => {
      // const { token } = action.payload;
      // state.token = token;
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      toast.success(`Yes!! ${state.user.firstName} you are logged in`);
    },
    logOut: (state, action) => {
      // state.token = null;
      state.user = null;
      toast.error('Logged out');
      localStorage.removeItem('user');
      localStorage.clear();
    }
  }
});

// Action creators
export const { setCredentials, logOut } = authSlice.actions;

// store needs to pick this reducer up
export default authSlice.reducer;

// A selector for the user and token created
export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;
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
