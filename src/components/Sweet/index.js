import React from 'react'
import './Sweet.scss'

import { ThemeContext } from '../../App'
import onePreview from '../../assets/sweet-one.png'
import twoPreview from '../../assets/sweet-two.png'

const getImages = (text) => {
	if(text.includes('one.png')){
		return onePreview
	}else{
		return twoPreview
	}
}

export const Sweet = ({sweet, ingr, preview, price}) => {
    const theme = React.useContext(ThemeContext)
    const filteredPrice = Number(price.split('$')[1])
    const realPreview = getImages(preview)


    console.log(theme)
    return (
        <div className='sweet'>
            <div className='sweet__preview'>
                <img src={realPreview}/>
            </div>
            <div className='sweet__name'>{sweet}</div>
            <div className='sweet__ingr'>{ingr}</div>
            <div className='sweet__price'>$ {filteredPrice}</div>
            <button style={+{ background: theme.background }} className='sweet__btn'>Add to cart</button>
        </div>
    )
}
