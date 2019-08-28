import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContestProvide from './contexts/ThemContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
	return (
		<div className="App">
			<ThemeContestProvide>
				<Navbar />
				<BookList />
				<ThemeToggle />
			</ThemeContestProvide>
		</div>
	);
}

export default App;
