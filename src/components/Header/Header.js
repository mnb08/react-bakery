import React from 'react'

import './Header.scss'
import logo from '../../assets/logo.png'
import burger from '../../assets/burger.png'
import basket from '../../assets/basket.png'
import { LeftSidebar } from '../LeftSidebar'
import { RightSidebar } from '../RightSidebar'

export const Header = () => {
  const [isClickedLeft, setIsClickedLeft] = React.useState(false)
  const [isClickedRight, setIsClickedRight] = React.useState(false)

  return (
    <>
        <div className='header'>
            <div onClick={() => setIsClickedLeft(true)} className='header__burger'>
                <img src={burger} />
            </div>
            <div className='header__logo'>
                <img src={logo} />
            </div>
            <div 
                className='header__basket'
                onClick={ () => setIsClickedRight(true)}
            >
                <img src={basket} />
                <span>15</span>
                
            </div>
        </div>
        <LeftSidebar setIsClicked={setIsClickedLeft} isClicked={isClickedLeft} />
        <RightSidebar setIsClicked={setIsClickedRight} isClicked={isClickedRight} />
    </>
  )
}
