import React from "react";
import "./ADHeader.scss";
import burger from '../../../assets/burger.png'
import { ADLeftSidebar } from "../ADLeftSidebar/ADindex";

export const ADHeader = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <>
            <div className="header">

                <div
                    className="header__burger"
                    onClick={() => {
                        setIsClicked(true);
                    }}>
                    <img src={burger} />
                </div>

                <div className="header__logo" style={{ color: "white" }}>
                    {'Sweet  Bakery'}
                </div>

                <div className="header__adminPage">admin  page</div>

            </div>
            <ADLeftSidebar setIsClicked={setIsClicked} isClicked={isClicked} />
        </>
    );
};
