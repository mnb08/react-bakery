import React from "react";
import "./ADLeftSidebar.scss"
import { Link } from 'react-router-dom';
export const ADLeftSidebar = ({ setIsClicked, isClicked }) => {
    return (
        <div className={`left-sidebar ${isClicked ? 'active' : ''}`}>
            <div
                className="left-sidebar__close"
                onClick={() => { setIsClicked(false) }}>
                {/* <img src={closeIcon}></img> */}
                ✖
            </div>
            <div className="left-sidebar__title">Contact us</div>
            <div className="left-sidebar__number">+11 4783 4477 8999</div>
            <div className="left-sidebar__text">Our delivery working from 09:00 to 23:00</div>
            <Link to="/" className="left-sidebar__page">Go to main page</Link>
        </div >
    );
};
