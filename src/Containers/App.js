import React, { Component } from 'react';
import stations from '../stations';
import Stations from '../Components/Stations/Stations';
import Player from '../Components/Player/Player';
import { API_URL } from '../config';
import { error } from 'util';

let interval = null;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			activeStation: {},
			isPaused: true,
			trackInfo: {}
		};
	}

	componentDidUpdate() {
		const { isPaused } = this.state;
		if (!isPaused) {
			document.getElementById('audio').play();
		}
	}
	
	// set current playing radiostation to state, for hightlighting ACTIVE station by another color 
	setActiveRadiostation = station => {
		clearInterval(interval);
		this.setState({ activeStation: station, isPaused: false });
		interval = setInterval(this.getTrackInfo, 2000);
	}

	// toggle icon on player and set the music play/pause
	togglePauseIcon = () => {
		let player = document.getElementById('audio');
		if (!player.paused) {
			player.pause();
			this.setState({ isPaused: true });
		} else {
			player.play();
			this.setState({ isPaused: false });
		}
	}

	// set request to API for track information (author, trackname, download link etc...)
	getTrackInfo = () => {
		const { activeStation } = this.state;
		if (!activeStation.prefix) {
			return new Error('No active stations!');
		}
		const validUrl = `${API_URL}xml/${activeStation.prefix}_online_v8.txt`;
		fetch(validUrl)
			.then(res => res.json())
			.then(data => this.setState({ trackInfo: data }));
	}

	render() {
		const { activeStation, isPaused, trackInfo } = this.state;

		return (
			<div className='App'>
				<Player activeStation={activeStation} isPaused={isPaused} togglePauseIcon={this.togglePauseIcon} getTrackInfo={this.getTrackInfo} trackInfo={trackInfo} />
				<Stations stations={stations} activeStation={activeStation} setActiveRadiostation={this.setActiveRadiostation} />
			</div>
		);
	}
}
