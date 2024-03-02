import React from "react";
import "./Footer.scss";
import { ThemeContext } from "../../App.js";

export const Footer = () => {
    const { themes, theme, setDarkTheme, setLightTheme, setIsDark, isDark } = React.useContext(ThemeContext);
    const sweetHeader = () => {
        if (isDark) return (
            themes.forHeader
        )
    }
    return (
        <div className="footer" style={sweetHeader()}>
            <div className="footer__incorporated">sweet bakery inc</div>
            <div className="footer__number">+11 4783 4477 8999</div>
            <div className="footer__adress">UK Privet Drive 4, 226 788-11</div>
            <div className="footer__copyright">© Sweet Bakery 2021</div>
        </div>
    );
};
