import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContestProvide from './contexts/ThemContext';

function App() {
	return (
		<div className="App">
			<ThemeContestProvide>
				<Navbar />
				<BookList />
			</ThemeContestProvide>
		</div>
	);
}

export default App;
