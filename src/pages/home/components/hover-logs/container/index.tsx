import React from 'react';
import { useStore } from 'effector-react';
import LogRow from 'pages/home/components/hover-logs/row';
import $store from 'store/grid';
import './index.css';

const HoverLogs = () => {
	const { rows, grid } = useStore($store);

	return (
		<div className="hover-logs-container">
			<h2>Hovered tiles</h2>
			{grid.map(({ isActive, id }, index) => (isActive ? <LogRow key={id} rows={rows} index={index} /> : null))}
		</div>
	);
};

export default HoverLogs;
