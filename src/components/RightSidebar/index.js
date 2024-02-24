import React from 'react'

import './RightSidebar.scss'
import closeWhite from '../../assets/close-white.png'
import { CartItem } from './CartItem'
import { DataContext } from '../../App'

export const RightSidebar = ({setIsClicked, isClicked}) => {
  const { carts } = React.useContext(DataContext)
  const [totalPrice, setTotalPrice] = React.useState(0)

  React.useEffect( () => {
        const totalPriceOfItem = carts.map( item => {
            return item.items * Number(item.price.split('$')[1])
        })
        
        setTotalPrice(totalPriceOfItem.reduce( (acc, item) => acc+=item, 0 ))
  }, carts)

  return (
    <div className={`rightSidebar ${isClicked ? 'active' : ''}`}>
        <div 
			className='rightSidebar__close'
			onClick={ () => setIsClicked(false)}
		>
            <img src={closeWhite} />
        </div>
        <div className="rightSidebar__carts">
            {
              carts.length === 0 ? <h3>Cart is empty</h3>: 
              carts.map( cart => (
                <CartItem key={cart.id} name={cart.sweet} items={cart.items} id={cart.id} price={cart.price} />
              ))
            }
            
        </div>
        <div className={`rightSidebar__line ${carts.length > 0 && 'hidden'}`}></div>
        <div className={`rightSidebar__total-price ${carts.length > 0 && 'hidden'}`}>
          <div className="rightSidebar__text">Total</div>
          <div className="rightSidebar__price">$ {totalPrice}</div>
        </div>
    </div>
  )
}
