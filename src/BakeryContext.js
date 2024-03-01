import axios from './axios'
import React from 'react'
import {initialState, bakeryReducer} from './bakeryReducer'

export const BakeryContext = React.createContext(initialState)

export const BakeryProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(bakeryReducer, initialState)
    
    const getSweets = async() => {
        const response = await axios.get('/sweets')
        dispatch({
            type: 'GETSWEETS',
            payload: response.data
        })
    } 

    const updateAndGetSweets = async(id, obj) => {
        const response = await axios.put(`/sweets/${id}`,obj)
        if(response.status == 200){
            getSweets()
        }
    }

    const value = {
        sweets: state.sweets,
        carts: state.carts,
        getSweets,
        updateAndGetSweets
    }
    
    return <BakeryContext.Provider value={value}>{children}</BakeryContext.Provider>
}