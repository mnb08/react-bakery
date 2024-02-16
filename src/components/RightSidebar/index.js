import React from 'react'

import './RightSidebar.scss'
import closeWhite from '../../assets/close-white.png'
import { CartItem } from './CartItem'

export const RightSidebar = ({setIsClicked, isClicked}) => {
  return (
    <div className={`rightSidebar ${isClicked ? 'active' : ''}`}>
        <div 
			className='rightSidebar__close'
			onClick={ () => setIsClicked(false)}
		>
            <img src={closeWhite} />
        </div>
        <div className="rightSidebar__carts">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
        <div className="rightSidebar__line"></div>
        <div className="rightSidebar__total-price">
        	<div className="rightSidebar__text">Total</div>
        	<div className="rightSidebar__price">$ 32.98</div>
        </div>
    </div>
  )
}
