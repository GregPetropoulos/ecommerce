import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../../features/auth/authSlice';

// Axios analogous
const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    //if the state has a token put it in the request headers
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // My backend will send a 403 forbidden for token expired else will sent 401 unathorized
  // This is why we are refreshing the token
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token got a 403');
    // Send refresh token to get new access token
    // /refresh endpoint comes from my backend Rest API
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log('refreshResult', refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // Store the new token
      api.dispatch(setCredentials(...refreshResult.data, user));
      //Retry original query with new accessToken
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};


// The empty endpoints get the injected endpoints from authService etc
export const api = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
});

// export const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000',
//     prepareHeaders: (headers, { getState }) => {
//       // By default, if we have a token in the store, let's use that for authenticated requests
//       const token = getState().auth.token;
//       console.log('token',token)
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
//       return headers;
//       // api.dispatch(setCredentials(token))
//     }
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: 'auth',
//         method: 'POST',
//         // body:{...credentials},
//         body: credentials
//       })
//     }),
//     protected: builder.mutation({
//       query: () => 'protected'
//     }),
//     sendLogout: builder.mutation({
//       query: () => ({
//         url: '/auth/logout',
//         method: 'POST'
//       }),
//       // }),
//       //   RTK Query  method
//       // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//       //   try {
//       //     // const {data}=
//       //     await queryFulfilled;
//       //     // console.log("data from onQueryStarted--authApiSlice",data)
//       //     dispatch(logOut());

//       //     //   clears cache
//       //     dispatch(api.util.resetApiState());
//       //   } catch (err) {
//       //     console.log(err);
//       //   }
//       // }
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

// export const { useRefreshMutation,useSendLogoutMutation, useLoginMutation, useProtectedMutation } =
//   api;
