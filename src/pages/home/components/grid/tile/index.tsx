import React, { useRef, useState } from 'react';
import './index.css';

type Props = {
	onActivate?: () => void;
	onDeactivate?: () => void;
};

enum POSITIONS {
	START,
	ENTER_ACTIVE,
	LEAVE_ACTIVE,
	ENTER_DISABLE,
	LEAVE_DISABLE,
}

const Tile: React.FC<Props> = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const counter = useRef<number>(POSITIONS.START);

	const onMouseEnter = () => {
		counter.current += 1;
		switch (counter.current) {
			case POSITIONS.ENTER_ACTIVE:
				setIsActive(true);
				break;
			case POSITIONS.ENTER_DISABLE: {
				setIsActive(false);
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
