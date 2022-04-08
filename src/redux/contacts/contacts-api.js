import { baseApi } from 'redux/base-api';

const contactsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getContacts: builder.query({
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
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query({ id, name, number }) {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: { name, number },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsApi;
