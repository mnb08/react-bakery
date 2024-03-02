import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import React, { useContext, useEffect, useReducer } from "react";

import "./Sweets.scss";
import { Sweetsmap } from "./Sweetsmap";
import { ThemeContext } from "../../App.js";
import { StoreContext, bakeryReducer } from "../../StoreReducer";
import { BakeryContext } from "../../BakeryContext.js";

// import { Image } from "./Image.js";
export const Sweets = () => {
    const { themes, setDarkTheme, setLightTheme, setIsDark, isDark } = React.useContext(ThemeContext);
    // const [item, setItem] = React.useState(1);

    const switchThemes = () => {
        if (isDark) {
            setDarkTheme()
            setIsDark(false)
        } else {
            setLightTheme(); setIsDark(true)
        }
    }
    const sweetTheme = () => {
        if (isDark) return (
            themes.forSweet.dark
        )
    }
    // React.useEffect(() => {
    //     getSweets()
    // }, [])
    // const store = useContext(StoreContext)
    // const [state, dispatch] = useReducer(bakeryReducer, store)
    // React.useEffect(() => {
    //     dispatch({ type: 'GETSWEETS' })
    //     console.log(state)
    // }, [])

    const { getSweets, sweets } = useContext(BakeryContext)
    useEffect(() => {
        getSweets()
        console.log(sweets);
    }, [])
    // console.log(context);
    return (
        <>
            <Header />
            <div className="sweets">

                {/* <button className="sweets__themes" onClick={switchThemes}>f755</button> */}

                <div className="sweets__avaliable">Avaliable sweets</div>
                <div className="sweets__cont">
                    {sweets.length == 0
                        ? <h1>Emty</h1>
                        : sweets.map((sweet) =>
                        (//return
                            <>
                                <Sweetsmap
                                    sweet={sweet.sweet}
                                    ingr={sweet.ingredients}
                                    price={sweet.price}
                                    id={sweet.id}
                                    img={sweet.img}
                                    key={sweet.id}
                                    sweetTheme={sweetTheme}
                                    quantity={sweet.quantity}
                                />
                                {/* <Image src={sweet.img} /> */}
                            </>

                        )
                        )}
                </div>
            </div>
            <Footer />
        </>
    );
};
