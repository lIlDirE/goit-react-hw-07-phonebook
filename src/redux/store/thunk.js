import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllContacts, deleteContact, addContact } from 'services/productsApi';


export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
	fetchAllContacts()
});

export const addContactsThunk = createAsyncThunk('contacts/addContact', (data) => {
	addContact(data)
});

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', (id) => {
	deleteContact(id)
});