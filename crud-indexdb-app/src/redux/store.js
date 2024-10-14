import { configureStore } from "@reduxjs/toolkit";
import onlineReducer from './statusSlice';

const store = configureStore({
    reducer  : {
        online: onlineReducer
    }
});

export default store;