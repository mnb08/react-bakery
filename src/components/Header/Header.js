import React from "react";
import "./Header.scss";
import basket from "../../assets/basket.png";
import burger from "../../assets/burger.png";
import { LeftSidebar } from "../LeftSidebar";
import { RightSidebar } from "../RightSidebar";
import { ThemeContext } from "../../App.js";
import { BakeryContext } from "../../BakeryContext.js";

export const Header = () => {
    const [isClicked, setIsClicked] = React.useState(false);
    const [isClickeds, setIsClickeds] = React.useState(false);
    const { themes, isDark } = React.useContext(ThemeContext);
    const { carts } = React.useContext(BakeryContext);

    const sweetHeader = () => {
        if (isDark) return (
            themes.forHeader
        )
    }
    let totalCount = carts.reduce((acc, { items }) => items + acc, 0)
    return (
        <>
            <div className="header" style={sweetHeader()}>

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

                <div
                    className="header__basket"
                    onClick={() => {
                        setIsClickeds(true);
                    }}>
                    <img src={basket} />
                    {
                        totalCount === 0 ? null : <span>{totalCount}</span>
                    }

                </div>

            </div>
            <LeftSidebar setIsClicked={setIsClicked} isClicked={isClicked} />
            <RightSidebar
                setIsClickeds={setIsClickeds}
                isClickeds={isClickeds}
            />
        </>
    );
};
