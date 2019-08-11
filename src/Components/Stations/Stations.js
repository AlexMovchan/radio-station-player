import React, { Fragment, useMemo, useCallback } from 'react';
import stations from '../../stations';
import { addToFavoriteList } from '../../redux/reducers/favoriteList';
import { setPauseStatus, setActiveStation } from '../../redux/reducers/track';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import StationCard from '../StationCard/StationCard';
import FavoriteList from './FavoriteList';
import { togglePlayAction } from '../../helpers/togglePlayAction';
import('./Stations.scss');

const Stations = () => {
  const favoriteList = useSelector(state => state.favoriteList.favoriteList, shallowEqual);
  const activeStation = useSelector(state => state.track.activeStation, shallowEqual);
  const isPaused = useSelector(state => state.track.isPaused);
  const dispatch = useDispatch();

  const setActiveRadiostation = useCallback((station) => {
    if (activeStation.id === station.id) {
      togglePlayAction(isPaused, dispatch);
    } else {
      dispatch(setPauseStatus(false));
      dispatch(setActiveStation(station));
    }
  }, [activeStation, dispatch, isPaused]);

  const filteredStations = useMemo(() =>
    favoriteList
      ? stations
        .filter(station => !favoriteList[station.id])
        .reverse()
      : stations,
    [favoriteList]
  );

  return (
    <Fragment>
      <div className='stations-container'>
        <FavoriteList
          favoriteList={favoriteList}
          activeStation={activeStation}
          setActiveRadiostation={setActiveRadiostation}
        />

        <div className='stations-list'>
          {filteredStations.map(station =>
            <StationCard
              key={station.id}
              isActive={station.id === activeStation.id}
              station={station}
              activeStation={activeStation}
              setActiveRadiostation={setActiveRadiostation}
              favoriteManageFunction={(station) => dispatch(addToFavoriteList(station))}
              favoriteActionName='add'
            />)
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Stations;