import React, { useState, useEffect } from 'react';
import stations from '../stations';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { API_URL } from '../config';
import { Header } from './style';


let interval = null;
const initialState = {
	activeStation: {},
	isPaused: true,
	trackInfo: {}
};

const App = () => {
	const [state, changeState] = useState(initialState);
	const { activeStation, isPaused, trackInfo } = state;

	useEffect(() => {
		if (!isPaused) {
			document.getElementById('audio').play();
		}
	}, [isPaused]);
	
	// set current playing radiostation to state, for hightlighting ACTIVE station by another color 
	const setActiveRadiostation = station => {
		clearInterval(interval);
		changeState(prevState => ({ ...prevState, activeStation: station, isPaused: false }));
		interval = setInterval(getTrackInfo, 2000);

		fetch('http://back.com', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(station)
		})
			.then(res => res.json())
			.catch(err => console.error(err));
	};

	// toggle icon on player and set the music play/pause
	const togglePauseIcon = () => {
		let player = document.getElementById('audio');
		if (!player.paused) {
			player.pause();
			changeState(prevState => ({ ...prevState, isPaused: true }));
		} else {
			player.play();
			changeState(prevState => ({ ...prevState, isPaused: false }));
		}
	};

	// set request to API for track information (author, trackname, download link etc...)
	const getTrackInfo = () => {
		if (!activeStation.prefix) {
			return new Error('No active stations!');
		}
		const validUrl = `${API_URL}xml/${activeStation.prefix}_online_v8.txt`;
		fetch(validUrl)
			.then(res => res.json())
			.then(data => changeState(prevState => ({ ...prevState, trackInfo: data })))
			.catch(err => console.error(err));
	};


	return (
		<div className='App'>
			<Header>
				<Player activeStation={activeStation} isPaused={isPaused} togglePauseIcon={togglePauseIcon} getTrackInfo={getTrackInfo} trackInfo={trackInfo} />
			</Header>
			<Stations stations={stations} activeStation={activeStation} setActiveRadiostation={setActiveRadiostation} />
		</div>
	);
};

export default App;
