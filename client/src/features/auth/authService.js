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
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: API_URL + id,
        method: 'DELETE',
        body: { id }
      })
    })
  })
});

export const { useLoginMutation, useRegisterMutation, useDeleteUserMutation } =
  authService;
