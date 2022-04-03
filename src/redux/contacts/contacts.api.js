import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.mutation({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query(contact) {
        return {
          url: `/contacts`,
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsMutation,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
