import React, { useEffect, useState, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import './index.css';
import Tile from '../tile';

type Props = {
	rows: number;
};

type GridTile = {
	id: string;
	isActive: boolean;
};

const Grid: React.FC<Props> = ({ rows }) => {
	const [grid, setGrid] = useState<GridTile[]>([]);

	useEffect(() => {
		const arr = [...new Array<GridTile>(rows ** 2)].map(() => ({ isActive: false, id: uuid() }));
		console.log('arr', arr);

		setGrid(arr);
	}, [rows]);

	const onActivate = (idx: string) => {
		setGrid((prev) => prev.map(({ id, isActive }) => (id === idx ? { id, isActive: true } : { id, isActive })));
	};

	const onDeactivate = (idx: string) => {
		setGrid((prev) => prev.map(({ id, isActive }) => (id === idx ? { id, isActive: false } : { id, isActive })));
	};

	const gridTemplateColumns = useMemo(() => `repeat(${rows}, 1fr)`, [rows]);

	console.log('len', grid.length);

	return (
		<div className="grid" style={{ gridTemplateColumns }}>
			{grid.map(({ isActive, id }) => (
				<Tile key={id} onActivate={() => onActivate(id)} onDeactivate={() => onDeactivate(id)} />
			))}
		</div>
	);
};

export default Grid;
