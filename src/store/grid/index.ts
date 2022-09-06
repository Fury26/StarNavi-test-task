import { createStore } from 'effector';
import { addEvents } from './events';

export type Tile = {
	isActive: boolean;
	id: string;
};

export type Store = {
	grid: Array<Tile>;
	rows: number;
};

const $store = addEvents(
	createStore<Store>({
		grid: [],
		rows: 0,
	}),
);

export default $store;
