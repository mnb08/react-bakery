import React, { useContext } from "react";
import "./RightSidebar.scss";
import { Cart } from "./Basket.js"
import shortid from "shortid";
import { BakeryContext } from "../../BakeryContext.js";
export const RightSidebar = ({ setIsClickeds, isClickeds }) => {
    const { carts } = useContext(BakeryContext)

    let totalPrice = carts.reduce((acc, { price }) => price + acc, 0)
    return (
        <div className={`cart ${isClickeds ? "active" : ""}`}>
            <div className="cart__close"
                onClick={() => {
                    setIsClickeds(false);
                }}>✖
            </div>
            {carts.length === 0
                ? <div className="cart__empty">Cart is empty</div>
                : carts.map(
                    (
                        sweet
                    ) => (//return
                        <Cart
                            sweet={sweet.sweet}
                            price={sweet.price}
                            id={sweet.id}
                            key={shortid.generate()}
                            quantity={sweet.quantity}
                            s={sweet}
                            items={sweet.items}
                        />
                    )
                )
            }
            <div className={`cart__total ${carts.length > 0 ? "" : "active"}`}>Total: <span> ${totalPrice.toFixed(2)}</span></div>
        </div>
    );
};

