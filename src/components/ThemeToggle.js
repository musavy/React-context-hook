import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemContext';

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<button onClick={toggleTheme} style={{ backgroundColor: 'gray' }}>
			Toggle the theme
		</button>
	);
};

export default ThemeToggle;
