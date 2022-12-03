import { api } from '../../app/services/api';
const API_URL = '/api/users/';

export const authService = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        // url:'/auth',
        url: API_URL + 'login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    register: builder.mutation({
      query: (userNew) => ({
        url: API_URL + 'register',
        method: 'POST',
        body: { ...userNew }
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation } = authService;
