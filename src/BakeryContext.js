import axios from '../src/components/axios'
import React, { createContext, useReducer } from 'react'
import { initialState, bakeryReducer } from './bakeryReducer'
export const BakeryContext = createContext(initialState)

export const BakeryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bakeryReducer, initialState)
    const getSweets = async () => {
        const response = await axios.get('/sweets')
        dispatch({ type: 'GETSWEETS', payload: response.data })
    }
    const updateAnDGetSweet = async (id, obj) => {
        const response = await axios.put(`/sweets/${id}`, obj)
        if (response.status == 200) {
            getSweets()
        }
    }
    const addAnDGetSweet = async (obj) => {
        const response = await axios.post(`/sweets`, obj)
        if (response.status === 201) {
            getSweets()
        }
    }
    const deleteAnDGetSweet = async (id) => {
        const response = await axios.delete(`/sweets/${id}`)
        if (response.status === 200) {
            getSweets()
        }
    }
    const addItemToCart = (obj) => {
        if (!obj) return
        state.carts.push(obj)
        const typedArrays = prev => {
            const typedArr = Object.values(Object.groupBy(prev, ({ id }) => id))
            return typedArr.map(itemss => {
                const items = itemss.reduce((acc, { items }) => items + acc, 0)
                    const price = itemss.reduce((acc, { price }) => price + acc, 0)
                    return { ...itemss[0], items, price }
            })
        }
        dispatch({ type: 'ADDTOCART', payload: typedArrays(state.carts) })
    }
    const value = {
        sweets: state.sweets,
        carts: state.carts,
        getSweets,
        updateAnDGetSweet,
        addItemToCart,
        addAnDGetSweet,
        deleteAnDGetSweet
    }
    return <BakeryContext.Provider value={value}> {children}</BakeryContext.Provider>
}
