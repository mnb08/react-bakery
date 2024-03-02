import { configureStore } from "@reduxjs/toolkit";
import sweetReducer from './sweetSlice'
export default configureStore({
    reducer: {
        cart: sweetReducer,
    },
});
