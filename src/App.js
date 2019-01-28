import React, { Component, Fragment } from 'react';
import Button from './audio-style';
import stations from './stations';
import Station from './Station/Station';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			activeStation: ''
		};
	}

	setActiveRadiostation = station => {
		console.log(1);
		this.setState({ activeStation: station })
		let audio = document.getElementById('audio');
		audio.setAttribute.src = `http://air.radiorecord.ru:805/${station.prefix || 'rr'}_320`
		audio.play();
	}

	render() {
		const { activeStation } = this.state;

		console.log(activeStation)
		return (
			<div className="App">
				{
					stations.map(station => <Station station={station} key={station.id} isActive={activeStation.id} setActiveRadiostation={this.setActiveRadiostation} />)
				}
				<audio src={`http://air.radiorecord.ru:805/${activeStation.prefix || 'rr'}_320`} id='audio' ></audio>
			</div>
		);
	}
}
