import { api } from '../../app/services/api';
const API_URL = 'api/users/';

export const userService = api.injectEndpoints({
  endpoints: (builder) => ({
    // delete: builder.mutation({
    //   query: (user) => ({
    //     method: 'DELETE',
    //     url: API_URL + ':id',
    //     body:{user}
    //   })
    // })
  })
});

export const {useDeleteMutation}=userService
