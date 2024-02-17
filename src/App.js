import React from 'react'

import { Content } from "./components/Content";
import { Header } from "./components/Header/Header";

const data = {
	carts: [

	]
  };

export const DataContext = React.createContext(data)

function App() {
	const [carts, setCarts] = React.useState(data.carts)

	console.log(carts)
	const addItemToCart = (obj) => {
		if(!obj) return
		setCarts([obj, ...carts])
	}
	
  return (
	<DataContext.Provider value={{addItemToCart, carts}}>
		<div className="app">
			<Header />
			<Content />
		</div>
	</DataContext.Provider>
  );
}

export default App;
