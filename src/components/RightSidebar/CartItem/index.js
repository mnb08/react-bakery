import React from 'react'
import './CartItem.scss'

export const CartItem = () => {
    return (
        <div className="cart">
            <div className="cart__left">
                <div className="cart__name">Rainbow donuts</div>
                <div className="cart__amount">2 items</div>
            </div>
            <div className="cart__price">$ 3.50</div>
        </div>
    )
}
