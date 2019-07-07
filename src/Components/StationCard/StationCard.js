import React from 'react';
import PropTypes from 'prop-types';

const StationCard = ({ station, isActive, setActiveRadiostation, favoriteManageFunction, favoriteActionName }) => {
  require('./StationCard.scss')

  return (
    <div
      className='station-card'
      onClick={() => setActiveRadiostation(station)}
    >
      <div className='background-icon'>
        <div class={`triangle centered ${isActive ? 'animated' : ''}`} />
        <div class={`innerCircle centered ${isActive ? 'animated' : ''}`} />
        <div class={`outerCircle centered ${isActive ? 'animated' : ''}`} />
      </div>

      <div className='card-title' >
        <div className='title'>{station.name}</div>
      </div>

      <div
        className='favorite-button-action'
        onClick={(e) => {
          e.stopPropagation();
          favoriteManageFunction(station);
        }}
        tooltip={favoriteActionName}
      >
        <span className={`${favoriteActionName === 'remove' ? 'remove' : 'add'}`}>
          { favoriteActionName === 'remove' ? '-' : '+' } 
        </span>
      </div>
    </div>
  )
}

StationCard.propTypes = {
  station: PropTypes.object,
  isActive: PropTypes.bool,
  setActiveRadiostation: PropTypes.func,
  favoriteManageFunction: PropTypes.func,
  favoriteActionName: PropTypes.string,
};

StationCard.defaultProps = {
  station: {},
  isActive: false,
  setActiveRadiostation: () => {},
  favoriteManageFunction: () => {},
  favoriteActionName: '',
};

export default StationCard;