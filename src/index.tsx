import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

Neutralino.init({
	load: function() {},
	pingSuccessCallback: function() {},
	pingFailCallback: function() {}
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);