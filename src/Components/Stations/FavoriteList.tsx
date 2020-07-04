import React, { FC, useEffect } from 'react';
import StationCard from '../StationCard/StationCard';
import { IStation, IFavoriteList } from './types';
import { removeFromFavoriteList, setFavoriteListFromLocalStorage } from '../../redux/reducers/favoriteList';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import './FavoriteList.scss';

interface IProps {
  favoriteList: IFavoriteList;
  activeStation: IStation;
  setActiveRadiostation: (station: IStation) => void;
}

const FavoriteList: FC<IProps> = ({ favoriteList, activeStation, setActiveRadiostation }) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    const favoriteListFromStorage = window.localStorage.getItem('favoriteList');
    if (favoriteListFromStorage) {
      dispatch(setFavoriteListFromLocalStorage(JSON.parse(favoriteListFromStorage).favoriteList));
    }
  }, []);

  return (
    <div className='favirite-list-container' data-simplebar>
      <div className='favorite-stations-list'>
        {favoriteList &&
          Object.keys(favoriteList).map(key => (
            <StationCard
              key={key}
              station={favoriteList[key]}
              isActive={activeStation.id === favoriteList[key].id}
              setActiveRadiostation={setActiveRadiostation}
              favoriteManageFunction={station => dispatch(removeFromFavoriteList(station))}
              favoriteActionName='remove'
            />
          ))
        }
      </div>
    </div>
  );
};

export default FavoriteList;
