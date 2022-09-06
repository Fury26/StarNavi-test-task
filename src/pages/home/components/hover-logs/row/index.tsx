import React from 'react';
import './index.css';

type Props = {
	index: number;
	rows: number;
};

const LogRow: React.FC<Props> = ({ index, rows }) => {
	const row = Math.trunc(index / rows);
	const column = index - row * rows;

	return (
		<div className="hover-log-row">
			Row: {row + 1}, Column: {column + 1}
		</div>
	);
};

export default LogRow;
