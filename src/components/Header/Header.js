import React from 'react'

import './Header.scss'
import logo from '../../assets/logo.png'
import burger from '../../assets/burger.png'
import basket from '../../assets/basket.png'
import { LeftSidebar } from '../LeftSidebar'

export const Header = () => {
  const [isClicked, setIsClicked] = React.useState(false)

  return (
    <>
        <div className='header'>
            <div onClick={() => setIsClicked(true)} className='header__burger'>
                <img src={burger} />
            </div>
            <div className='header__logo'>
                <img src={logo} />
            </div>
            <div className='header__basket'>
                <img src={basket} />
                <span>15</span>
                
            </div>
        </div>
        <LeftSidebar setIsClicked={setIsClicked} isClicked={isClicked} />
    </>
  )
}
