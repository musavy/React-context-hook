import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContestProvide from './contexts/ThemContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
	return (
		<div className="App">
			<ThemeContestProvide>
				<AuthContextProvider>
					<Navbar />
					<BookList />
					<ThemeToggle />
				</AuthContextProvider>
			</ThemeContestProvide>
		</div>
	);
}

export default App;
