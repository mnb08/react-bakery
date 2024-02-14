import React from 'react'

import { Content } from "./components/Content";
import { Header } from "./components/Header/Header";

const themes = {
	light: {
	  foreground: "#000000",
	  background: "#eeeeee"
	},
	dark: {
	  foreground: "#ffffff",
	  background: "#222222"
	}
  };

export const ThemeContext = React.createContext(themes.light)

function App() {
  return (
	<ThemeContext.Provider value={themes.dark}>
		<div className="app">
			<Header />
			<Content />
		</div>
	</ThemeContext.Provider>
  );
}

export default App;
