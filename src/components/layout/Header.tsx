import React, { useState } from 'react';

import MainMenu from '../widgets/MainMenu';
import UserInfo from '../widgets/UserInfo';

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};

	return (
		<div className="header">
			<MainMenu show={showMenu} />
			<div className="mainmenu lcars">
				<button
					className="menu-button"
					onClick={handleMenuClick}
					type="button"
				>
					{showMenu ? 'CLOSE' : 'MENU'}
				</button>
				<div className="spacer" />
			</div>
			<div className="info">
				<div className="title">
					<div className="lcars app-name">Crew Management Tool</div>
					<UserInfo className="user-info" />
				</div>
				<div className="spacer" />
			</div>
		</div>
	);
};

export default Header;
