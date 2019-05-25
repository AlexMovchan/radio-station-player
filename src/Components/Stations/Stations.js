import React, { useReducer, Fragment } from 'react';
import PropTypes from 'prop-types';
import stations from '../../stations';
import {
	StyledContainer,
  StyledFavorite,
  Header
} from './style';
import reducer, { initialState, addToFavoriteList, removeFromFavoriteList } from '../../redux/stationReducer';
import StationCard from '../StationCard/StationCard';

const Stations = ({ setActiveRadiostation, activeStation }) => {
  const [{favoriteList}, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <StyledContainer>
        <Header>
          <h2>Улюблені радіостанції</h2>
          {Object.keys(favoriteList).length ? '' : <p>Додайте сюди ваші улюблені радіостанції</p>}
        </Header>
        <StyledFavorite>
          {Object.keys(favoriteList).length
            ? Object.keys(favoriteList).map(key => (
              <StationCard
                key={key}
                station={favoriteList[key]}
                activeStation={activeStation}
                setActiveRadiostation={setActiveRadiostation}
                favoriteManageFunction={(station) => dispatch(removeFromFavoriteList(station))}
                favoriteActionName='remove'
              />
            ))
            : ''
          }
        </StyledFavorite>
      </StyledContainer>
      
      <StyledContainer>
        { 
          stations
            .filter(station => !favoriteList[station.id])
            .map(station =>
              <StationCard
                key={station.id}
                station={station}
                activeStation={activeStation}
                setActiveRadiostation={setActiveRadiostation}
                favoriteManageFunction={(station) => dispatch(addToFavoriteList(station))}
                favoriteActionName='add'
              />
            )
        }
      </StyledContainer>
    </Fragment>
  );
};

Stations.propTypes = {
  activeStation: PropTypes.object,
  setActiveRadiostation: PropTypes.func,
};

Stations.defaultProps = {
  activeStation: {},
  setActiveRadiostation: () => {},
};

export default Stations;