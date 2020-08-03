import React from 'react';

function App() {
	if (typeof Neutralino === 'undefined') {
		return (
			<h2>Unable to find Neutralino library!!</h2>
		);
	}
	return (
		<div>
			<h3>
				{`${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}`}
				<br />
				<br />
				<span>{`v ${NL_VERSION}`}</span>
			</h3>
			<h4 className="lcars-font">Hello Okuda!</h4>
		</div>
	);
}

export default App;
