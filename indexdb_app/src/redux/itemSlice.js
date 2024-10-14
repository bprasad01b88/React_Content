import { createSlice } from "@reduxjs/toolkit";
import db from "../db/db";
const initialState = [];

const itemsSlice = createSlice({
    name: 'items',
  initialState,
  reducers: {
    setItems: (state, action) => action.payload,
    addItem: (state, action) => {
      const newItem = action.payload;
      db.items.add(newItem);
      state.push(newItem);
    },
    editItem: (state, action) => {
      const { id, newData } = action.payload;
      const index = state.findIndex((item) => item.id === parseInt(id));
      if (index !== -1) {
        state[index] = { ...state[index], ...newData };
        db.items.update(id, newData);
      }
    },
  },
  });
  
  export const fetchItems = () => async (dispatch) => {
    const items = await db.items.toArray();
    dispatch(setItems(items));
  };
  export const { setItems, addItem, editItem } = itemsSlice.actions;
  export default itemsSlice.reducer;


