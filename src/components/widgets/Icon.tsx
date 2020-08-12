import React from 'react';

const Icon = ({ className, width, height }: {
	className: string;
	width: number;
	height: number;
}) => (
	<div className={className} style={{ border: '1px solid white' }}>
		<div style={
			{
				backgroundColor: 'darkgray',
				width: `${width}px`,
				height: `${height}px`,
				clipPath: `polygon(0 0,
					${width}px 0,
					${width / 2}px ${height / 2}px,
					${width}px ${height}px,
					0 ${height}px,
					${width / 2}px ${height / 2}px,
					0 0,
					0 ${height}px)`,
			}
		}
		/>
	</div>
);

Icon.defaultProps = {
	className: '',
	width: 40,
	height: 40,
};
export default Icon;
