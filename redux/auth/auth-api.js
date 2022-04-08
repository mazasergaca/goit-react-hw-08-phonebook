import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query({ name, email, password }) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body: {
            name,
            email,
            password,
          },
        };
      },
    }),
    logIn: builder.mutation({
      query({ email, password }) {
        return {
          url: `/users/login`,
          method: 'POST',
          body: {
            email,
            password,
          },
        };
      },
    }),
    logOut: builder.mutation({
      query() {
        return {
          url: `/users/logout`,
          method: 'POST',
        };
      },
    }),
    fetchCurrentUser: builder.mutation({
      query() {
        return {
          url: `/users/current`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useFetchCurrentUserMutation,
} = authApi;
