import { createStore } from 'effector';
import { addEvents } from './events';

export type Tile = {
	isActive: boolean;
	id: string;
};

export type Mode = {
	field: number;
	name: string;
};

export type Store = {
	modes: Mode[];
};

const $store = addEvents(
	createStore<Store>({
		modes: [],
	}),
);

export default $store;
