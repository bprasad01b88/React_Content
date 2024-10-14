import { configureStore } from "@reduxjs/toolkit";
import onlineReducer from './statusSlice';
import itemReducer from './itemSlice';

const store = configureStore({
    reducer  : {
        online: onlineReducer,
        items : itemReducer
    }
});

export default store;