import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6443cb85466f7c2b4b5a745a.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/contacts/contacts');
  return response.data;
});
