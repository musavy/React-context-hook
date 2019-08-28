import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContestProvide from './contexts/ThemContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
	return (
		<div className="App">
			<ThemeContestProvide>
				<AuthContextProvider>
					<Navbar />
					<BookContextProvider>
						<BookList />
					</BookContextProvider>

					<ThemeToggle />
				</AuthContextProvider>
			</ThemeContestProvide>
		</div>
	);
}

export default App;
