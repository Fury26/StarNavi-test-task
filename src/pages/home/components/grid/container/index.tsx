import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { v4 as uuid } from 'uuid';
import Tile from '../tile';
import $store from 'store/grid';
import { setGrid, toggleActive } from 'store/grid/events';
import './index.css';

type GridTile = {
	id: string;
	isActive: boolean;
};

const Grid: React.FC = () => {
	const { rows, grid } = useStore($store);

	const onActivate = (idx: string) => {
		toggleActive(idx);
	};

	const onDeactivate = (idx: string) => {
		toggleActive(idx);
	};

	useEffect(() => {
		const newRows = rows || 5;
		const arr = [...new Array<GridTile>(newRows ** 2)].map(() => ({ isActive: false, id: uuid() }));
		setGrid(arr);
	}, [rows]);

	const gridTemplateColumns = `repeat(${rows || 5}, auto)`;

	return (
		<div className={`grid ${rows ? '' : 'disabled'}`} style={{ gridTemplateColumns }}>
			{grid.map(({ isActive, id }) => (
				<Tile key={id} onActivate={() => onActivate(id)} onDeactivate={() => onDeactivate(id)} isActive={isActive} />
			))}
		</div>
	);
};

export default Grid;
