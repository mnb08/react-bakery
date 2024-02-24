import React from 'react'
import './CartItem.scss'

export const CartItem = ({name, price, items}) => {
    
    return (
        <div className="cart">
            <div className="cart__left">
                <div className="cart__name">{name}</div>
                <div className="cart__amount">{items} items</div>
            </div>
            <div className="cart__price">{price}</div>
        </div>
    )
}
