import React, { useRef } from 'react';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { Helmet } from "react-helmet";
import { Header } from './style';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
	const interval = useRef();

	return (
		<Provider store={store}>
			<Helmet>
				<title>Radio UA</title>
				<meta name="description" content="Radio Station Streaming" />
			</Helmet>

			<div className='App'>
				<Header>
					<Player interval={interval} />
				</Header>
				<Stations interval={interval} />
			</div>
		</Provider>
	);
};

export default App;
