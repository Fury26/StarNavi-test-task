import React from 'react';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { useState } from 'react';
import { clearGrid, setRows } from 'store/grid/events';
import $modesStore from 'store/modes';
import $gridStore from 'store/grid';
import './index.css';
import { getModes } from 'requests/modes';

const Controls: React.FC = () => {
	const { modes } = useStore($modesStore);
	const [length, setLength] = useState(0);
	const { rows } = useStore($gridStore);

	const onModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLength(+e.target.value);
	};

	const onStart = () => {
		if (rows === length && rows > 0) {
			clearGrid();
			return;
		}
		setRows(length);
	};

	useEffect(() => {
		getModes();
	}, []);

	return (
		<div className="controls">
			<select className="controls-select" placeholder="Pick Mode" onChange={onModeChange} defaultValue={0}>
				<option hidden value={0}>
					Pick Mode
				</option>
				{modes.map(({ field, name }) => (
					<option value={field} key={name}>
						{name}
					</option>
				))}
			</select>
			<button disabled={!length} className="controls-button" onClick={onStart}>
				{rows === length && rows > 0 ? 'Restart' : 'Start'}
			</button>
		</div>
	);
};

export default Controls;
