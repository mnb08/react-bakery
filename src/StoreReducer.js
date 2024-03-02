import axios from './components/axios'
import React from 'react'
const initialState = {
    sweets: [],
    carts: []
}
const getSweets = async () => {
    const response = await axios.get('/sweets')
    return response.data
}
export const StoreContext = React.createContext(initialState)

export const bakeryReducer = async (state, action) => {
    switch (action.type) {
        case 'GETSWEETS':
            const data = getSweets()
            console.log({ sweets: data, cartData: { ...state.carts } });
            console.log(data);
            console.log(state.sweets);
            return { sweets: data, cartData: { ...state.carts } }
            // data.then(data=>{return data})
            
    }
}

