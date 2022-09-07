import React from 'react';
import Controls from 'pages/home/components/controls/container';
import HoverLogs from 'pages/home/components/hover-logs/container';
import Grid from '../components/grid/container';
import './index.css';

const Home: React.FC = () => {
	return (
		<div className="home">
			<Controls />
			<div className="home-grid-container">
				<Grid />
				<HoverLogs />
			</div>
		</div>
	);
};

export default Home;
