import React, { useEffect } from 'react';
import StationCard from '../StationCard/StationCard';
import { removeFromFavoriteList, setFavoriteListFromLocalStorage } from '../../redux/reducers/favoriteList';
import { useDispatch } from 'react-redux';

const FavoriteList = ({ favoriteList, activeStation, setActiveRadiostation }) => {
  require('./FavoriteList.scss')
  const dispatch = useDispatch();
  useEffect(() => {
    const favoriteListFromStorage = window.localStorage.getItem('favoriteList');
    if (favoriteListFromStorage) {
      dispatch(setFavoriteListFromLocalStorage(JSON.parse(favoriteListFromStorage).favoriteList))
    }
  }, [])
  return (
    <div className='favirite-list-container' data-simplebar>
      <div className='favorite-stations-list'>
        {
          Object.keys(favoriteList).length
            ?
              Object.keys(favoriteList).map(key => (
                <StationCard
                  key={key}
                  station={favoriteList[key]}
                  isActive={activeStation.id === favoriteList[key].id}
                  setActiveRadiostation={setActiveRadiostation}
                  favoriteManageFunction={(station) => dispatch(removeFromFavoriteList(station))}
                  favoriteActionName='remove'
                />
              ))
            : ''
        }
      </div>
    </div>
  )
}

export default FavoriteList;
