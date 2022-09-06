import { createEvent, Store as State } from 'effector';
import { Mode, Store } from '.';

export const setModes = createEvent<Mode[]>();

export const addEvents = (store: State<Store>) => store.on(setModes, (state, modes) => ({ ...state, modes }));
