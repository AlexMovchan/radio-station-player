import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import stations from '../../stations';
import { addToFavoriteList } from '../../redux/reducers/favoriteList';
import { setPauseStatus, setActiveStation } from '../../redux/reducers/track';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import StationCard from '../StationCard/StationCard';
import FavoriteList from './FavoriteList';
import { togglePlayAction } from '../../helpers/togglePlayAction';
import('./Stations.scss');

const Stations = ({ isPaused, activeStation, favoriteList, interval }) => {
  const dispatch = useDispatch();

  const setActiveRadiostation = (station) => {
    clearInterval(interval);
    dispatch(setPauseStatus(false));

    if (activeStation.id === station.id) {
      togglePlayAction(isPaused, dispatch);
    } else {
      dispatch(setPauseStatus(false));
    }
		dispatch(setActiveStation(station));
  };

  return (
    <Fragment>
      <div className='stations-container'>
        <FavoriteList
          favoriteList={favoriteList}
          activeStation={activeStation}
          setActiveRadiostation={setActiveRadiostation}
        />

        <div className='stations-list'>
          {
            stations
              .filter(station => !favoriteList[station.id])
              .reverse()
              .map(station =>
                <StationCard
                  key={station.id}
                  isActive={station.id === activeStation.id}
                  station={station}
                  activeStation={activeStation}
                  setActiveRadiostation={setActiveRadiostation}
                  favoriteManageFunction={(station) => dispatch(addToFavoriteList(station))}
                  favoriteActionName='add'
                />
              )
          }
        </div>
      </div>
    </Fragment>
  );
};

Stations.propTypes = {
  activeStation: PropTypes.object,
  setActiveRadiostation: PropTypes.func,
  favoriteList: PropTypes.object,
  isPaused: PropTypes.bool,
  interval: PropTypes.instanceOf(Element).isRequired
};

Stations.defaultProps = {
  activeStation: {},
  setActiveRadiostation: () => {},
  favoriteList: {},
  isPaused: false
};

const mapStateToProps = state => ({
  favoriteList: state.favoriteList.favoriteList,
  activeStation: state.track.activeStation,
  isPaused: state.track.isPaused,
});

export default connect(mapStateToProps)(Stations);