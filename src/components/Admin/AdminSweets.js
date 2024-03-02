import React from 'react'
import sweet1 from "../../assets/sweet-one.png";
import sweet2 from "../../assets/sweet-two.png";
import sweet3 from "../../assets/sweet-muffins.png";
import sweet4 from "../../assets/sweet-cheesecakes.png";
import sweet5 from "../../assets/sweet-cookies.png";
import sweet6 from "../../assets/sweet-brownies.png";
import bin from "../../assets/bin.png";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import edit from "../../assets/edit.png";
import editTitle from "../../assets/edit-text.png";
import { BakeryContext } from '../../BakeryContext.js';

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
export const AdminSweets = ({ id, sweet, img, price, quantity, ingr }) => {
    const { deleteAnDGetSweet, updateAnDGetSweet } = React.useContext(BakeryContext);

    const [minuss, setMinus] = React.useState(1)
    const [pluss, setPlus] = React.useState(1)
    const [isInEditMode, setisInEditMode] = React.useState(false)
    const [isPriceInEditMode, setisPriceInEditMode] = React.useState(false)
    const [isEdited, setisEdited] = React.useState(false)
    const [isPriceEdited, setisPriceEdited] = React.useState(false)
    const [isDelited, setisDelited] = React.useState(false)
    const inputRef = React.useRef(null);
    const priceRef = React.useRef(null);

    const realSweet = getImg(img);
    const Minus = () => {
        setMinus(minuss + 1)
    }
    const Plus = () => {
        setPlus(pluss + 1)
    }

    // !Отнимаем количество элементов
    React.useEffect(() => {
        if (minuss == 1) return
        const sweetObj = { id, sweet, ingredients: ingr, img, price: price, quantity: quantity - 1 }
        updateAnDGetSweet(id, sweetObj)
    }, [minuss])

    // !Добавляем количество элементов
    React.useEffect(() => {
        if (pluss == 1) return
        const sweetObj = { id, sweet, ingredients: ingr, img, price: price, quantity: quantity + 1 }
        updateAnDGetSweet(id, sweetObj)
    }, [pluss])
    // !Меняем название
    React.useEffect(() => {
        if (isEdited == false) return
        const sweetObj = { id, sweet: inputRef.current !== null ? inputRef.current.value : '', ingredients: ingr, img, price: price, quantity }
        updateAnDGetSweet(id, sweetObj)
        setisInEditMode(false)
        setisEdited(false)
    }, [isEdited])

    // !Меняем цену
    React.useEffect(() => {
        if (isPriceEdited == false) return
        const sweetObj = { id, sweet, ingredients: ingr, img, price: priceRef.current.value, quantity }
        updateAnDGetSweet(id, sweetObj)
        setisPriceInEditMode(false)
        setisPriceEdited(false)
    }, [isPriceEdited])

    if (inputRef.current !== null) {
        console.log(inputRef.current.value);
    }
    // !Удаляем элемент
    React.useEffect(() => {
        if (isDelited == false) return
        deleteAnDGetSweet(id)
        setisDelited(false)
    }, [isDelited])
    return (
        <div className="asweets__item" quantity={quantity}>
            <div className='asweets__a'>
                {
                    isInEditMode ?
                        <div className='asweets__editdit'>
                            <input className='asweets__editname' type='text' defaultValue={sweet} ref={inputRef} /> <img src={editTitle} onClick={() => {
                                setisEdited(true)
                            }}></img>
                        </div> :
                        <div className="asweets__name">{sweet} <img onClick={() => setisInEditMode(true)} src={edit} className='asweets__edit'></img></div>
                }
                {
                    isPriceInEditMode ? <div className='asweets__editdit'>
                        <input className='asweets__editname' type='text' defaultValue={price} ref={priceRef} /> <img src={editTitle} onClick={() => {
                            setisPriceEdited(true)
                        }}></img>
                    </div> :
                        <div className="asweets__price"><span className='asweets__stock'>price:</span> ${price}<img onClick={() => setisPriceInEditMode(true)} src={edit} className='asweets__edit'></img></div>
                }

            </div>
            <div className="asweets__quantity">in stock: <img onClick={Minus} src={minus} className='asweets__minus' /> {quantity} <img src={plus} className='asweets__plus' onClick={Plus} /></div>
            <img src={realSweet} className="asweets__img" />
            <img src={bin} className="asweets__bin" onClick={() => setisDelited(true)} />
        </div>
    )
}
