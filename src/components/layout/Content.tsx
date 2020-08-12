import React from 'react';
import ContentMenu from './ContentMenu';

const Content = () => (
	<div className="content">
		<ContentMenu />
		<div>
			<h3>
				{`${NL_NAME} is running on port ${NL_PORT} inside ${NL_OS}`}
				<br />
				<br />
				<span>{`v ${NL_VERSION}`}</span>
			</h3>
			<h4 className="lcars">Hello Okuda!</h4>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
			<h5>Hello World</h5>
		</div>
	</div>
);

export default Content;
