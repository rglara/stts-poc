import React from 'react';

function App() {
	if (typeof Neutralino === "undefined") {
		return (
			<h2>Unable to find Neutralino library!!</h2>
		);
	}
	return (
		<h3>
			{`${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}`} <br />
			<br />
			<span> {`v ${NL_VERSION}`} </span>
		</h3>
	);
}

export default App;
