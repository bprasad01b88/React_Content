// actions/itemActions.js
import { createSlice } from '@reduxjs/toolkit';
import db from '../../db/indexdb';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItems: (state, action) => action.payload,
    addItem: (state, action) => {
      const newItem = action.payload;
      db.items.add(newItem);
      state.push(newItem);
    },
    editItem: (state, action) => {
      const { id, newData } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex] = { ...state[itemIndex], ...newData };
        db.items.update(id, newData);
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      db.items.delete(id);
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { setItems, addItem, editItem, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;
