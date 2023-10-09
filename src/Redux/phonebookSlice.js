import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from 'Redux/operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  alert('An error occurred during the operation!!!');
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    // GET reducers
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [getContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    // POST reducers
    [addContacts.pending]: handlePending,
    [addContacts.rejected]: handleRejected,
    [addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    // DELETE reducers
    [deleteContacts.pending]: handlePending,
    [deleteContacts.rejected]: handleRejected,
    [deleteContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { setFilter } = phonebookSlice.actions;

// export default phonebookSlice.reducer;
