import React from 'react';
import { StyledFavorite, StyledHeader, StyledFavoriteStationsList } from './style';
import StationCard from '../StationCard/StationCard';
import { removeFromFavoriteList } from '../../redux/reducers/favoriteList';
import { useDispatch } from 'react-redux';

const FavoriteList = ({ favoriteList, activeStation, setActiveRadiostation }) => {
  const dispatch = useDispatch();
  return (
    <StyledFavorite>
      <StyledHeader>
        <h2>Улюблені радіостанції <span role="img" aria-label='emojii'>💣</span></h2>
        {Object.keys(favoriteList).length ? '' : <p>Додайте сюди ваші улюблені радіостанції</p>}
      </StyledHeader>

      <StyledFavoriteStationsList>
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
      </StyledFavoriteStationsList>
    </StyledFavorite>
  )
}

export default FavoriteList;
