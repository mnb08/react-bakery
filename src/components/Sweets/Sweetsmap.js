import React, { useContext, useEffect } from "react";
import sweet1 from "../../assets/sweet-one.png";
import sweet2 from "../../assets/sweet-two.png";
import sweet3 from "../../assets/sweet-muffins.png";
import sweet4 from "../../assets/sweet-cheesecakes.png";
import sweet5 from "../../assets/sweet-cookies.png";
import sweet6 from "../../assets/sweet-brownies.png";
import { ThemeContext } from "../../App.js";
import { BakeryContext } from "../../BakeryContext.js";

const getImg = (text) => {
    if (text.includes("one.png")) {
        return sweet1;
    }
    else if (text.includes("muffins.png")) { return sweet3 }
    else if (text.includes("cheesecakes.png")) { return sweet4 }
    else if (text.includes("cookies.png")) { return sweet5 }
    else if (text.includes("brownies.png")) { return sweet6 }
    else {
        return sweet2;
    }
};

export const Sweetsmap = ({ id, sweet, ingr, img, price, quantity, sweetTheme, item }) => {
    const { themes, isDark } = React.useContext(ThemeContext);
    const realSweet = getImg(img);
    const [isClicked, setIsClicked] = React.useState(1)
    const sweetButtons = () => {
        if (isDark) { return (themes.forSweet.addButtons) }
    }
    const clickHandler = () => {
        setIsClicked(isClicked + 1)
    }
    const { getSweets, sweets, updateAnDGetSweet, addItemToCart } = useContext(BakeryContext)
    useEffect(() => {
        getSweets()
        console.log(sweets);
    }, [])
    useEffect(() => {
        if (isClicked == 1) return
        const cartObj = getCartObj({ id, sweet, price, item })
        console.log({ id, sweet, price, quantity });
        addItemToCart(cartObj)
        const sweetObj = { id, sweet, ingredients: ingr, img, price: price, quantity: quantity == 0 ? quantity : quantity - 1 }
        updateAnDGetSweet(id, sweetObj)
    }, [isClicked])

    const getCartObj = () => {
        return { id, sweet, price, items: 1 }
    }

    return (
        <div className="sweets__item" style={sweetTheme()} key={id}>
            <img src={realSweet} className="sweets__img" />
            <div className="sweets__name">{sweet}</div>
            <div className="sweets__ingredients">{ingr}</div>
            <div className="sweets__price">${price}</div>
            <button
                onClick={clickHandler}
                style={sweetButtons()}
                className={`sweets__add ${quantity == 0 ? "active" : ""}`}>
                Add to cart {quantity}
            </button>
        </div>
    );
};

