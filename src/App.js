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

export const ThemeContext = React.createContext(themes)

function App() {
	const [theme, setTheme] = React.useState(themes.dark)

	const setDarkTheme = () => setTheme(themes.dark)
	const setLightTheme = () => setTheme(themes.light)

  return (
	<ThemeContext.Provider value={{theme, setDarkTheme, setLightTheme}}>
		<div className="app">
			<Header />
			<Content />
		</div>
	</ThemeContext.Provider>
  );
}

export default App;
