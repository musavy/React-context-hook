import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemContext';

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>Toggle the theme</button>;
};

export default ThemeToggle;
