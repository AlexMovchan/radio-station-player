import React from 'react';
import PropTypes from 'prop-types';
import Visualizator from './Visualizator';
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
    <StyledInfoContainer isActive={activeStation.id === station.id}>
      { activeStation.id === station.id && <Visualizator />}
      <StyledTrackName isActive={activeStation.id === station.id}>{station.name}</StyledTrackName>
    </StyledInfoContainer>

    <StyledManageFavoriteListIcon
      onClick={(e) => {
        e.stopPropagation();
        favoriteManageFunction(station);
      }}
      favoriteActionName={favoriteActionName}
      tooltip={favoriteActionName}
    >
      { favoriteActionName === 'remove' ? '-' : '+' } 
    </StyledManageFavoriteListIcon>
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