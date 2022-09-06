import React from 'react';
import Grid from '../components/grid/container';

const Home: React.FC = () => {
	return (
		<div>
			<div style={{ width: '50%' }}>
				<Grid rows={5} />
			</div>
		</div>
	);
};

export default Home;
