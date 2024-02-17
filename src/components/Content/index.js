import React from 'react'
import { Sweet } from '../Sweet'
import './Content.scss'
import axios from '../../axios.js'

export const Content = () => {

	const  [data, setData] = React.useState([])

	React.useEffect( () => {
		const getSweets = async() => {
			const response = await axios.get('/sweets')
			setData(response.data)
		}

		getSweets()
	}, [])


	return (
		<div className='content'>
			<h1 className='content__title'>Avaliable sweets</h1>
			<div className='content__wrapper'>
				{
					data.length == 0 ? '<h1>Данных нету!!!</h1>' : 
					data.map( sweet => (
						<Sweet key={sweet.id} id={sweet.id} sweet={sweet.sweet} amount={sweet.amount} ingr={sweet.ingredients} price={sweet.price} preview={sweet.img} />
					))
				}
			</div>
			
		</div>
	)
}
