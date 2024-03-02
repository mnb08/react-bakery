export const initialState = {
    sweets: [],
    carts: []
}

export const bakeryReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'GETSWEETS':
            return {
                ...state,
                sweets: payload
            }
        case 'ADDTOCART':
            console.log(state);
            return{
                ...state,
                carts: payload
            }
        default:
            return state
    }
}
