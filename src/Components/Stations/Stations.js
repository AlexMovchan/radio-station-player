import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	StationCard,
	TrackName,
	InfoContainer
} from './style';

const Stations = ({ stations, setActiveRadiostation, activeStation}) =>
	<Container>
		{stations.map(station => 
			<StationCard
				isActive={activeStation.id === station.id}
				prefix={station.prefix}
				onClick={() => setActiveRadiostation(station)}
				key={station.id}
			>
				<InfoContainer isActive={activeStation.id === station.id}>
					<TrackName isActive={activeStation.id === station.id}>{station.name}</TrackName>
				</InfoContainer>
			</StationCard>
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