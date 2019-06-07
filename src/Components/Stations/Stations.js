import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import stations from '../../stations';
import {
	StyledContainer,
  StyledHeader
} from './style';
import { addToFavoriteList } from '../../redux/reducers/favoriteList';
import { setPauseStatus, setActiveStation } from '../../redux/reducers/track';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import StationCard from '../StationCard/StationCard';
import FavoriteList from './FavoriteList';

const Stations = ({ activeStation, favoriteList, interval }) => {
  const dispatch = useDispatch();

  const setActiveRadiostation = (station) => {
    clearInterval(interval);
		dispatch(setPauseStatus(false));
		dispatch(setActiveStation(station));
  }

  return (
    <Fragment>
      <StyledContainer>
        <StyledHeader>
          <h2>Улюблені радіостанції</h2>
          {Object.keys(favoriteList).length ? '' : <p>Додайте сюди ваші улюблені радіостанції</p>}
        </StyledHeader>

        <FavoriteList
          favoriteList={favoriteList}
          activeStation={activeStation}
          setActiveRadiostation={setActiveRadiostation}
        />
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
  favoriteList: PropTypes.object,
};

Stations.defaultProps = {
  activeStation: {},
  setActiveRadiostation: () => {},
  favoriteList: {},
};

const mapStateToProps = state => ({ 
  favoriteList: state.favoriteList.favoriteList,
  activeStation: state.track.activeStation,
})

export default connect(mapStateToProps)(Stations);