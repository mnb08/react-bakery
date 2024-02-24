import React from 'react'

import { Content } from "./components/Content";
import { Header } from "./components/Header/Header";
import axios from './axios';

const data = {
	sweets: [],
	carts: []
  };



  export const DataContext = React.createContext(data)
  
  function App() {
		const [sweets, setSweets] = React.useState(data.sweets)
		const [carts, setCarts] = React.useState(data.carts)
		
		const addItemToCart = (obj) => {
			if(!obj) return
			carts.push(obj)
			const typedArrays = cartsArr => {
				const typedArr = Object.values(Object.groupBy(cartsArr, ({id}) => id))
				return typedArr.map( items => {
					const amount = items.reduce( (acc, item) => acc += item.items, 0)
					return {...items[0], items: amount}
				})
			}
			 
			setCarts(typedArrays(carts))
		}
		
		const updateAndGetSweet = async(id, obj) => {
			const response = await axios.put(`/sweets/${id}`, obj)
			if(response.status === 200){
				const sweets = await axios.get('/sweets')
				setSweets(sweets.data)
			}
		}

		const getSweets = async() => {
			const response = await axios.get('/sweets')
			setSweets(response.data)
		}
		
		React.useEffect( () => {
			getSweets()
		}, [])

  return (
	<DataContext.Provider value={{getSweets, addItemToCart, sweets, setSweets, carts, updateAndGetSweet}}>
		<div className="app">
			<Header />
			<Content />
		</div>
	</DataContext.Provider>
  );
}

export default App;
