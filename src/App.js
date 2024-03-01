import React from 'react'

import { Content } from "./components/Content";
import { Header } from "./components/Header/Header";
import axios from './axios';
import { BakeryProvider } from './BakeryContext';

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

  return (
		<BakeryProvider>
			<div className="app">
				<Header />
				<Content />
			</div>
		</BakeryProvider>
  );
}

export default App;
