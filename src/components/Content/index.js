import React from 'react'
import { Sweet } from '../Sweet'
import './Content.scss'
import axios from '../../axios.js'
import { ThemeContext } from '../../App.js'

export const Content = () => {

	const  [data, setData] = React.useState([])
	const [isDark, setIsDark] = React.useState(false)
	const {theme, setDarkTheme, setLightTheme,} = React.useContext(ThemeContext)

	React.useEffect( () => {
		const getSweets = async() => {
			const response = await axios.get('/sweets')
			setData(response.data)
		}
		getSweets()
	}, [])


	const switchThemes = () => {
		if(isDark){
			setDarkTheme()
			setIsDark(false)
		}else{
			setLightTheme()
			setIsDark(true)
		}

		console.log(theme)
	}

	return (
		<div className='content'>
			<button onClick={switchThemes} className='content__switch'>Switch theme</button>
			<h1 className='content__title'>Avaliable sweets</h1>
			<div className='content__wrapper'>
				{
					data.length == 0 ? '<h1>Данных нету!!!</h1>' : 
					data.map( sweet => (
						<Sweet key={sweet.id} sweet={sweet.sweet} ingr={sweet.ingredients} price={sweet.price} preview={sweet.img} />
					))
				}
			</div>
			
		</div>
	)
}
