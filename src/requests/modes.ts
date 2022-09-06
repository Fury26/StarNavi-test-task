import axios from 'axios';
import { Mode } from 'store/modes';
import { setModes } from 'store/modes/events';

export const getModes = async () => {
	const res = await axios.get<Mode[]>('https://demo7919674.mockable.io/');
	if (res.status > 400) {
		return;
	}
	setModes(res.data);
};
