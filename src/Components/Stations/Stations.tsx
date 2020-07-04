import React, { FC, useMemo, useCallback } from 'react';
import stations from '../../stations';
import { addToFavoriteList } from '../../redux/reducers/favoriteList';
import { setPauseStatus, setActiveStation } from '../../redux/reducers/track';
import { connect } from 'react-redux';
import StationCard from '../StationCard/StationCard';
import FavoriteList from './FavoriteList';
import { IStore } from '../../redux/store';
import { IStation, IFavoriteList } from './types'
import './Stations.scss';

interface IProps {
  favoriteList: IFavoriteList;
  activeStation: IStation;
  isPaused: boolean;
  dispatch: (action: any) => void;
}

const Stations: FC<IProps> = (props) => {
  const { favoriteList, activeStation, isPaused, dispatch } = props;

  const setActiveRadiostation = useCallback((station) => {
    if (activeStation.id === station.id) {
      dispatch(setPauseStatus(!isPaused))
    } else {
      dispatch(setPauseStatus(false));
      dispatch(setActiveStation(station));
    }
  }, [activeStation.id, isPaused]);

  const filteredStations = useMemo(() =>
    favoriteList
      ? stations
        .filter(station => !favoriteList[station.id])
        .reverse()
      : stations,
    [favoriteList]
  );

  return (
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
            setActiveRadiostation={setActiveRadiostation}
            favoriteManageFunction={(station) => dispatch(addToFavoriteList(station))}
            favoriteActionName='add'
          />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  favoriteList: state.favoriteList.favoriteList,
  activeStation: state.track.activeStation,
  isPaused: state.track.isPaused,
})

export default connect(mapStateToProps)(Stations);
