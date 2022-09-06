import React, { useEffect, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import './index.css';
import Tile from '../tile';
import { useStore } from 'effector-react';
import $store from 'store/grid';
import { setGrid, toggleActive } from 'store/grid/events';

type Props = {
	// rows: number;
};

type GridTile = {
	id: string;
	isActive: boolean;
};

const Grid: React.FC<Props> = () => {
	const { rows, grid } = useStore($store);

	useEffect(() => {
		const newRows = rows || 5;
		const arr = [...new Array<GridTile>(newRows ** 2)].map(() => ({ isActive: false, id: uuid() }));
		setGrid(arr);
	}, [rows]);

	const onActivate = (idx: string) => {
		toggleActive(idx);
	};

	const onDeactivate = (idx: string) => {
		toggleActive(idx);
	};

	const gridTemplateColumns = useMemo(() => `repeat(${rows || 5}, auto)`, [rows]);

	return (
		<div className={`grid ${rows ? '' : 'disabled'}`} style={{ gridTemplateColumns }}>
			{grid.map(({ isActive, id }) => (
				<Tile key={id} onActivate={() => onActivate(id)} onDeactivate={() => onDeactivate(id)} isActive={isActive} />
			))}
		</div>
	);
};

export default Grid;
