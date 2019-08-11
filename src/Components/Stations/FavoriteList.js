import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StationCard from '../StationCard/StationCard';
import { removeFromFavoriteList, setFavoriteListFromLocalStorage } from '../../redux/reducers/favoriteList';
import { useDispatch } from 'react-redux';
import('./FavoriteList.scss');

const FavoriteList = ({ favoriteList, activeStation, setActiveRadiostation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const favoriteListFromStorage = window.localStorage.getItem('favoriteList');
    if (favoriteListFromStorage) {
      dispatch(setFavoriteListFromLocalStorage(JSON.parse(favoriteListFromStorage).favoriteList));
    }
  }, [dispatch]);

  return (
    <div className='favirite-list-container' data-simplebar>
      <div className='favorite-stations-list'>
        {Object.keys(favoriteList).length
          ? Object.keys(favoriteList).map(key => (
              <StationCard
                key={key}
                station={favoriteList[key]}
                isActive={activeStation.id === favoriteList[key].id}
                setActiveRadiostation={setActiveRadiostation}
                favoriteManageFunction={station => dispatch(removeFromFavoriteList(station))}
                favoriteActionName='remove'
              />
            ))
          : ''}
      </div>
    </div>
  );
};

FavoriteList.propTypes = {
  activeStation: PropTypes.object,
  setActiveRadiostation: PropTypes.func,
  favoriteList: PropTypes.object,
  isPaused: PropTypes.bool,
};

FavoriteList.defaultProps = {
  activeStation: {},
  setActiveRadiostation: () => {},
  favoriteList: {},
  isPaused: false,
};

export default FavoriteList;
