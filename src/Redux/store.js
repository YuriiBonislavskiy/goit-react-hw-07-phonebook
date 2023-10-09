import { configureStore } from '@reduxjs/toolkit';
import { phonebookSlice } from './phonebookSlice';

export const store = configureStore({
  reducer: phonebookSlice.reducer,
 });

export default store;
