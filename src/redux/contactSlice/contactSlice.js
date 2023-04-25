import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => [...state, action.payload],
    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const contactReducer = contactsSlice.reducer;

export const { addContact, removeContact } = contactsSlice.actions;
