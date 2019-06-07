import React from 'react';
import { StyledFavorite } from './style';
import StationCard from '../StationCard/StationCard';
import { removeFromFavoriteList } from '../../redux/reducers/favoriteList';
import { useDispatch } from 'react-redux';

const FavoriteList = ({ favoriteList, activeStation, setActiveRadiostation }) => {
  const dispatch = useDispatch();
  return (
    <StyledFavorite>
      {
        Object.keys(favoriteList).length
          ?
            Object.keys(favoriteList).map(key => (
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
  )
}

export default FavoriteList;
