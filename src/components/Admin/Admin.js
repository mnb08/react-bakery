import React from 'react'
import { AdminSweets } from './AdminSweets.js';
import './Admin.scss'
import { ADHeader } from './Header/ADHeader.js';
import { ADFooter } from './Footer/ADFooter.js';
import { BakeryContext } from '../../BakeryContext.js';

export const Admin = () => {
    const { getSweets, sweets, addAnDGetSweet } = React.useContext(BakeryContext);
    const [isClicked, setIsClicked] = React.useState(false)
    const [isPosted, setIsPosted] = React.useState(false)

    const nameRef = React.useRef(null);
    const ingrRef = React.useRef(null);
    const imgRef = React.useRef(null);
    const priceRef = React.useRef(null);
    const stockRef = React.useRef(null);

    React.useEffect(() => {
        getSweets()
    }, [])
    React.useEffect(() => {
        if (isPosted == false) return
        const sweetObj = { id: JSON.stringify(Date.now()), sweet: nameRef.current.value, ingredients: ingrRef.current.value, img: '', price: Number(priceRef.current.value), quantity: Number(stockRef.current.value) }
        addAnDGetSweet(sweetObj)
        setIsPosted(false)
        setIsClicked(false)
    }, [isPosted])
    if (nameRef.current !== null) {
        console.log(nameRef.current.value);
    }
    function handleClick() {
        console.log(nameRef.current.value);

    }
    return (
        <>
            <ADHeader />
            <div className="asweets">
                {
                    isClicked ? <div className='asweets__addmod'>
                        <div className='asweets__modcont'>
                            <div className='asweets__modflex'>
                                <div className='asweets__modtext'>Create new item in shop</div>
                                <input type='text' placeholder='Name' ref={nameRef} onChange={handleClick} />
                                <input type='text' placeholder='Image url' ref={imgRef} />
                                <input type='text' placeholder='Ingredients' ref={ingrRef} />
                                <input type='text' placeholder='In stock' ref={stockRef} />
                                <input type='text' placeholder='Cost' ref={priceRef} />
                                <button className='asweets__addbutton' onClick={() => { setIsPosted(true) }}>Add new item</button>

                            </div>
                        </div>
                    </div> : null
                }

                <div className="asweets__avaliable">Avaliable sweets</div>
                <div className="asweets__cont">
                    {sweets.length == 0
                        ? <h1>Emty</h1>
                        : sweets.map((sweet) =>
                        (//return
                            <AdminSweets
                                sweet={sweet.sweet}
                                ingr={sweet.ingredients}
                                price={sweet.price}
                                id={sweet.id}
                                img={sweet.img}
                                key={sweet.id}
                                quantity={sweet.quantity}
                            />
                        )
                        )}
                    <button className='asweets__add' onClick={() => setIsClicked(true)}>Add new shop item</button>
                </div>
            </div>
            <ADFooter />

        </>
    );
}
