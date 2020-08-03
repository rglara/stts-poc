import React from 'react';

import Header from './layout/Header';
import Content from './layout/Content';

import './Layout.css';

function App() {
	if (typeof Neutralino === 'undefined') {
		return (
			<h2>Unable to find Neutralino library!!</h2>
		);
	}
	return (
		<div className="layout">
			<Header />
			<Content />
		</div>
	);
}

export default App;
