import { createSlice } from "@reduxjs/toolkit";
const sweetSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, action) {
            console.log(state);
            console.log(action);
            state.cart.push({
                id: action.payload.id,
                sweet: action.payload.sweet,
                ingredients: action.payload.ingr,
                price: action.payload.filteredPrice,
                img: action.payload.realSweet,
            });
        },
    },
});
export const { addToCart } = sweetSlice.actions;

export default sweetSlice.reducer;
