export const initialState = {
    sweets: [],
    carts: []
}

export const bakeryReducer = (state, action) => {
    const {type, payload} = action 

    switch (type) {
        case 'GETSWEETS':
            return {
                ...state,
                sweets: payload
            }    
        default:
            return state
    }
}