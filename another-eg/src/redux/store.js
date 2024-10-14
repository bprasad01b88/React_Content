// store.js
import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducer/itemSlice';
import dataReduce from './reducer/dataSlice';

const store = configureStore({
  reducer: {
    items: itemReducer,
    data: dataReduce
  },
});

export default store;
