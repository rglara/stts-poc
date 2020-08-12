import React from 'react';

import Icon from './Icon';
import styles from './UserInfo.module.css';

const UserInfo = ({ className }: {
	className: string;
}) => (
	<div className={`${styles.container} ${className}`}>
		<div className={styles.username}>User Name</div>
		<Icon className={styles.icon} />
	</div>
);

UserInfo.defaultProps = {
	className: '',
};
export default UserInfo;
