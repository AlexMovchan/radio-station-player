import React, { useRef, useReducer } from 'react';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { Header } from './style';
import reducer, { initialState, setPauseStatus, setActiveStation } from '../redux/playerReducer';

const App = () => {
	const [{ activeStation }, dispatch] = useReducer(reducer, initialState);
	const interval = useRef();

	const setActiveRadiostation = station => {
		clearInterval(interval);
		dispatch(setPauseStatus(false));
		dispatch(setActiveStation(station));
	};

	return (
		<div className='App'>
			<Header>
				<Player interval={interval} activeStation={activeStation} />
			</Header>
			<Stations interval={interval} setActiveRadiostation={setActiveRadiostation} activeStation={activeStation} />
		</div>
	);
};

export default App;
