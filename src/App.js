
import { Main } from "./components/Main/Main";
import React from "react";
import { BakeryProvider } from "./BakeryContext";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    forApp: {
        dark: {
            foreground: "#ffffff",
            background: "black",
            color: "white"
        }
    },
    forSweet: {
        dark: {
            foreground: "#ffffff",
            background: "#bbbbbb",
            color: "black"
        },
        addButtons: {
            background: "linear-gradient(90deg, rgba(36,0,30,1) 0%, rgba(121,9,79,1) 100%)"
        }
    },
    forHeader: {
        background: "linear-gradient(90deg, rgba(36,0,30,1) 0%, rgba(121,9,79,1) 100%)",
        color: "white"
    }
};

const dataCart = {
    sweets: [],
    carts: [],
}
export const ThemeContext = React.createContext(themes, dataCart)

function App() {

    const [sweets, setSweets] = React.useState(dataCart.sweets)
    const [theme, setTheme] = React.useState(themes.dark)
    const setDarkTheme = () => setTheme(themes.dark)
    const setLightTheme = () => setTheme(themes.light)
    const [isDark, setIsDark] = React.useState(false);
    const [cartData, setCartData] = React.useState(dataCart.carts);

    const appTheme = () => {
        if (isDark) return (themes.forApp.dark)
    }
    return (
        <BakeryProvider value={{ sweets, cartData, setSweets }}>
            <div className="app" style={appTheme()}>
                <Main />
            </div>
        </BakeryProvider>
    );
}
export default App;
