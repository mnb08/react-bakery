import React from 'react'
import './LeftSidebar.scss'
import closeIcon from '../../assets/closeIcon.png'

export const LeftSidebar = ({setIsClicked, isClicked}) => {
  return (
        <div className={`left-sidebar ${isClicked ? 'active' : ''}`}>
            <div
                onClick={() => setIsClicked(false)} 
                className='left-sidebar__close'>
                <img src={closeIcon} />
            </div>
            <div className='left-sidebar__title'> Contact us</div>
            <div className='left-sidebar__number'> + 996 704 08 04 02</div>
            <div className='left-sidebar__text'> Our delivery working from 09:00 to 23:00</div>
            
            <a href='#'>Go to admin page</a>
        </div>
    )
}
