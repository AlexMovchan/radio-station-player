import React, { useRef } from 'react';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { Helmet } from "react-helmet";
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
	const interval = useRef();

	return (
		<Provider store={store}>
			<Helmet>
				<title>Radio UA</title>
				<link rel="shortcut icon" href="./img/favicon-16x16.png" type="image/gif" sizes="16x16"></link>
				<meta name="description" content="Radio Station Streaming" />
			</Helmet>

			<div className='App'>
				<Player interval={interval} />
				<Stations interval={interval} />
			</div>
		</Provider>
	);
};

export default App;
