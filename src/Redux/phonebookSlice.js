import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, deleteContacts } from 'Redux/operations';


const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
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
    [getContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContacts.rejected]: handleRejected,
    [getContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items= state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

// console.log(phonebookSlice);
export const { setFilter } = phonebookSlice.actions;

// export default phonebookSlice.reducer;
