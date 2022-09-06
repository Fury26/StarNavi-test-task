import { useStore } from 'effector-react';
import LogRow from 'pages/home/components/hover-logs/row';
import React from 'react';
import './index.css';
import $store from 'store/grid';

const HoverLogs = () => {
	const { rows, grid } = useStore($store);

	return (
		<div className="hover-logs-container">
			<h2>Hovered tiles</h2>
			{/* <div className="hover-logs"> */}
			{grid.map(({ isActive, id }, index) => (isActive ? <LogRow key={id} rows={rows} index={index} /> : null))}
			{/* </div> */}
		</div>
	);
};

export default HoverLogs;
