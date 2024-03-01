import React, { useEffect } from 'react'
import { Sweet } from '../Sweet'
import './Content.scss'
import { BakeryContext } from '../../BakeryContext'

export const Content = () => {
	const { getSweets, sweets } = React.useContext(BakeryContext)

	React.useEffect( () => {
		getSweets()
		console.log(sweets)

	}, [])

	return (
		<div className='content'>
			<h1 className='content__title'>Avaliable sweets</h1>
			<div className='content__wrapper'>
				{
					sweets.length == 0 ? <h1>Данных нету!!!</h1> : 
					sweets.map( sweet => (
						<Sweet key={sweet.id} id={sweet.id} sweet={sweet.sweet} amount={sweet.amount} ingr={sweet.ingredients} price={sweet.price} preview={sweet.img} />
					))
				}
			</div>
			
		</div>
	)
}
