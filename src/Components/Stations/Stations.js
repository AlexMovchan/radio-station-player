import React from 'react';
import PropTypes from 'prop-types';
import stations from '../../stations';
import {
	Container,
	StationCard,
	TrackName,
	InfoContainer
} from './style';

const Stations = ({ setActiveRadiostation, activeStation }) =>
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
  activeStation: PropTypes.object,
  setActiveRadiostation: PropTypes.func,
};

Stations.defaultProps = {
  activeStation: {},
  setActiveRadiostation: () => {},
};

export default Stations;