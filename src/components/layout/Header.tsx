import React from 'react';

const Header = () => {
	const handleMenuClick = (e: React.MouseEvent) => {
		e.preventDefault();
		// console.log('MENU CLICKED!');
	};
	return (
		<div className="header">
			<div className="mainmenu lcars">
				<button
					className="menu-button"
					onClick={handleMenuClick}
					type="button"
				>
					MENU
				</button>
				<div className="spacer" />
			</div>
			<div className="info">
				<div className="title">HEADER</div>
				<div className="spacer" />
			</div>
		</div>
	);
};

export default Header;
