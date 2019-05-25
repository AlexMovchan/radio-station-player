import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledStationCard,
	StyledTrackName,
  StyledInfoContainer,
  StyledManageFavoriteListIcon,
} from './style.js';

const StationCard = ({ station, activeStation, setActiveRadiostation, favoriteManageFunction, favoriteActionName }) =>
  <StyledStationCard
    isActive={activeStation.id === station.id}
    prefix={station.prefix}
    onClick={() => setActiveRadiostation(station)}
    key={station.id}
  >
    <StyledManageFavoriteListIcon
      onClick={(e) => {
        e.stopPropagation();
        favoriteManageFunction(station);
      }}
      favoriteActionName={favoriteActionName}
      tooltip={favoriteActionName} />
    <StyledInfoContainer isActive={activeStation.id === station.id}>
      <StyledTrackName isActive={activeStation.id === station.id}>{station.name}</StyledTrackName>
    </StyledInfoContainer>
  </StyledStationCard>;

StationCard.propTypes = {
  station: PropTypes.object,
  activeStation: PropTypes.object,
  setActiveRadiostation: PropTypes.func,
  favoriteManageFunction: PropTypes.func,
  favoriteActionName: PropTypes.string,
};

StationCard.defaultProps = {
  station: {},
  activeStation: {},
  setActiveRadiostation: () => {},
  favoriteManageFunction: () => {},
  favoriteActionName: '',
};

export default StationCard;