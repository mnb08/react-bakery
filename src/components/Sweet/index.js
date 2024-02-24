import React, { useContext } from 'react'
import './Sweet.scss'

import { DataContext } from '../../App'
import onePreview from '../../assets/sweet-one.png'
import twoPreview from '../../assets/sweet-two.png'

const getImages = (text) => {
    if(!text) return
	if(text.includes('one.png')){
		return onePreview
	}else{
		return twoPreview
	}
}

const getCartObj = (obj) => {
    const { id, sweet, price } = obj
    return {id,sweet, price, items: 1}
}

export const Sweet = ({id,sweet, ingr, preview, price, amount}) => {
    const { addItemToCart, updateAndGetSweet } = useContext(DataContext)
    
    const [isClicked, setIsClicked] = React.useState(1)

    const filteredPrice = Number(price.split('$')[1])
    const realPreview = getImages(preview)

    React.useEffect( () => {
        if(isClicked == 1) return 
        
        const cartObj = getCartObj({id,sweet, price})
        addItemToCart(cartObj)
        const sweetObj = {id,sweet, ingredients: ingr, img: preview, price, amount: amount-1}
        updateAndGetSweet(id, sweetObj)
        

    }, [isClicked])

    const clickHandler = () => {
        setIsClicked(isClicked + 1)
    }
    
    return (
        <div className='sweet'>
            <div className='sweet__preview'>
                <img src={realPreview}/>
            </div>
            <div className='sweet__name'>{sweet}</div>
            <div className='sweet__ingr'>{ingr}</div>
            <div className='sweet__price'>$ {filteredPrice}</div>
            <button
                onClick={ () => clickHandler()} 
                className='sweet__btn'
            >Add to cart {amount}</button>
        </div>
    )
}
