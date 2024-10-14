import { createSlice } from '@reduxjs/toolkit';
import { addItemToDB, getAllItemsFromDB } from '../../db/db';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        editItem: (state, action) => {
            const { id, newData } = action.payload;
            const index = state.items.findIndex(item => item.id === id);
            if (index !== -1) {
                state.items[index] = newData;
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },
    },
});

export const fetchItemsFromDB = () => async dispatch => {
    try {
        const items = await getAllItemsFromDB();
        dispatch({ type: 'data/setItems', payload: items });
    } catch (error) {
        console.error('Error fetching items from DB:', error);
    }
};

export const addItems = item => async dispatch => {
    try {
        await addItemToDB(item);
        dispatch({ type: 'data/addItem', payload: item });
    } catch (error) {
        console.error('Error adding item to DB:', error);
    }
};

export const { addItem, editItem, deleteItem } = dataSlice.actions;

export default dataSlice.reducer;
