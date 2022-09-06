import { createEvent, Store as State } from 'effector';
import { Store, Tile } from '.';

export const toggleActive = createEvent<string>();
export const setGrid = createEvent<Array<Tile>>();
export const setRows = createEvent<number>();
export const clearGrid = createEvent();

const toggleActiveAction = (state: Store, id: string) => {
	return { ...state, grid: state.grid.map((tile) => (id === tile.id ? { ...tile, isActive: !tile.isActive } : tile)) };
};

export const addEvents = (store: State<Store>) =>
	store
		.on(toggleActive, toggleActiveAction)
		.on(clearGrid, (state) => ({ ...state, grid: state.grid.map((tile) => ({ ...tile, isActive: false })) }))
		.on(setGrid, (state, grid) => ({ ...state, grid }))
		.on(setRows, (state, rows) => ({ ...state, rows }));
