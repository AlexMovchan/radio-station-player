import React, { useRef } from 'react';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
	const interval = useRef();
	const player = useRef();

	return (
		<Provider store={store}>
			<Helmet>
				<title>Radio UA</title>
				<meta name="description" content="Radio Station Streaming" />
			</Helmet>

			<div className='App'>
				<Player interval={interval} player={player} />
				<Stations interval={interval} player={player} />
			</div>
		</Provider>
	);
};

export default App;
