import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

Neutralino.init({
	load: () => {},
	pingSuccessCallback: () => {},
	pingFailCallback: () => {},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
