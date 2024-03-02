import React from 'react'

export const Cart = ({ sweet, price, items }) => {

    return (
        <div className="cart__item" >
            <div className='cart__f'>
                <div className="cart__name">{sweet}</div>
                <div className='cart__quantity'>{items} items</div>
            </div>
            <div className="cart__price">${price.toFixed(2)}</div>

        </div>
    )
}