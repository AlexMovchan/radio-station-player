import React, { useState, useEffect, useRef } from 'react';
import stations from '../stations';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { Header } from './style';


const initialState = {
	activeStation: {},
	isPaused: true,
	trackInfo: {}
};

const App = () => {
	let player = useRef();
	const [state, changeState] = useState(initialState);
	const { activeStation, isPaused } = state;

	useEffect(() => {
		player.current.play();
	}, [activeStation]);
	
	// set current playing radiostation to state, for hightlighting ACTIVE station by another color 
	const setActiveRadiostation = station => {
		changeState(prevState => ({ ...prevState, activeStation: station, isPaused: false }));
	};

	// toggle icon on player and set the music play/pause
	const togglePauseIcon = () => {
		if (!player.current.paused) {
			player.current.pause();
			changeState(prevState => ({ ...prevState, isPaused: true }));
		} else {
			player.current.play();
			changeState(prevState => ({ ...prevState, isPaused: false }));
		}
	};

	return (
		<div className='App'>
			<Header>
				<Player activeStation={activeStation} isPaused={isPaused} togglePauseIcon={togglePauseIcon} player={player} />
			</Header>
			<Stations stations={stations} activeStation={activeStation} setActiveRadiostation={setActiveRadiostation} />
		</div>
	);
};

export default App;
