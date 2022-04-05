import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder.addMatcher(
  //     contactsApi.endpoints.getContacts.matchFulfilled,
  //     (state, action) => {
  //       state.items = action.payload;
  //     }
  //   );
  // },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
