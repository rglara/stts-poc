import React from 'react';

import styles from './MainMenu.module.css';

const MainMenu = ({ show }: {
	show: boolean;
}) => (
	<div className={styles.container} style={{visibility: show ? 'visible' : 'hidden'}}>
		<div>PRIMARY MENU</div>
		<div>
			<div>Button #1</div>
			<div>Button #2</div>
			<div>Button #3</div>
			<div>Button #4</div>
			<div>Button #5</div>
			<div>Button #6</div>
		</div>
		<div>SECONDARY MENU</div>
		<div>
			<div>Button A</div>
			<div>Button B</div>
		</div>
	</div>
);

MainMenu.defaultProps = {
	show: false,
};
export default MainMenu;
