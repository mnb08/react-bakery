import React, { useContext } from 'react'
import './Sweet.scss'

import { DataContext } from '../../App'
import onePreview from '../../assets/sweet-one.png'
import twoPreview from '../../assets/sweet-two.png'

const getImages = (text) => {
	if(text.includes('one.png')){
		return onePreview
	}else{
		return twoPreview
	}
}

export const Sweet = ({id,sweet, ingr, preview, price, amount}) => {
    const { addItemToCart } = useContext(DataContext)
    // console.log(context)
    const filteredPrice = Number(price.split('$')[1])
    const realPreview = getImages(preview)

    const addItem = () => {
        addItemToCart({id,name: sweet, price, amount})
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
                onClick={ () => addItem()} 
                className='sweet__btn'
            >Add to cart</button>
        </div>
    )
}
