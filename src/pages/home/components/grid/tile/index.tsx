import React, { useRef } from 'react';
import './index.css';

type Props = {
	onActivate?: () => void;
	onDeactivate?: () => void;
	isActive: boolean;
};

enum POSITIONS {
	START,
	ENTER_ACTIVE,
	LEAVE_ACTIVE,
	ENTER_DISABLE,
	LEAVE_DISABLE,
}

const Tile: React.FC<Props> = ({ onActivate = () => {}, onDeactivate = () => {}, isActive }) => {
	const counter = useRef<number>(POSITIONS.START);

	const onMouseEnter = () => {
		counter.current += 1;
		switch (counter.current) {
			case POSITIONS.ENTER_ACTIVE:
				onActivate();
				break;
			case POSITIONS.ENTER_DISABLE: {
				onDeactivate();
				break;
			}
			default:
				break;
		}
	};

	const onMouseLeave = () => {
		counter.current += 1;
		if (counter.current === POSITIONS.LEAVE_DISABLE) {
			counter.current = POSITIONS.START;
		}
	};

	return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`tile ${isActive ? 'active' : ''}`} />;
};

export default Tile;
