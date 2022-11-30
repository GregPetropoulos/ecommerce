// import {apiSlice} from '../../app/api/apiSlice';
// import { logOut } from './authSlice';

// //ENDPOINTS
// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth',
//         method: 'POST',
//         body: { ...credentials }
//       })
//     }),
//     sendLogout: builder.mutation({
//       query: () => ({
//         url: '/auth/logout',
//         method: 'POST'
//       }),

//     //   RTK Query  method
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           // const {data}=
//           await queryFulfilled;
//           // console.log("data from onQueryStarted--authApiSlice",data)
//           dispatch(logOut());

//         //   clears cache
//           dispatch(apiSlice.util.resetApiState());
//         } catch (err) {
//           console.log(err);
//         }
//       }
//     }),
//     //Refresh tokens
//     refresh: builder.mutation({
//       query: () => ({
//         url: '/auth/refresh',
//         method: 'GET'
//       })
//     })
//   })
// });
// export const {
//     useLoginMutation,
//     useSendLogoutMutation,
//     useRefreshMutation,
// }=authApiSlice