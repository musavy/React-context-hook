import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContestProvider extends Component {
	state = {
		isLightTheme: true,
		light: { syntax: 'black', ui: 'blue', bg: 'tomato' },
		dark: { syntax: 'yellow', ui: 'green', bg: 'red' },
	};
	toggleTheme = () => {
		this.setState({ isLightTheme: !this.state.isLightTheme });
	};
	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContestProvider;
