import { reducer } from './reducer';
import { createStore } from '@reduxjs/toolkit';

export const store = createStore(reducer)

