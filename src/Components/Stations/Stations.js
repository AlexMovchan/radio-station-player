import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	StationCart,
	BackgroundGradientDown,
	BackgroundGradientUp,
	TrackName
} from './style';

const Stations = ({ stations, setActiveRadiostation, activeStation}) =>
	<Container>
		{stations.map(station => 
			<StationCart isActive={activeStation.id === station.id} prefix={station.prefix} onClick={() => setActiveRadiostation(station)} key={station.id} >
				<BackgroundGradientDown isActive={activeStation.id === station.id} />
				<BackgroundGradientUp isActive={activeStation.id === station.id} />
				<div className='info'>
					<TrackName isActive={activeStation.id === station.id}>{station.name}</TrackName>
				</div>
			</StationCart>
		)}
	</Container>;

Stations.propTypes = {
	stations: PropTypes.array,
	setActiveRadiostation: PropTypes.func,
	activeStation: PropTypes.object
};

Stations.defaultProps = {
	stations: [],
	setActiveRadiostation: () => {},
	activeStation: {}
};

export default Stations;