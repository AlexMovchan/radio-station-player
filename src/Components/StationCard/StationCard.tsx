import React, { SFC, FormEvent } from 'react';
import { IStation } from '../Stations/types';
import './StationCard.scss';

interface IProps {
  station: IStation;
  isActive: boolean;
  setActiveRadiostation: (station: IStation) => void;
  favoriteManageFunction: (station: IStation) => void;
  favoriteActionName: string;
}

const StationCard: SFC<IProps> = ({ station, isActive, setActiveRadiostation, favoriteManageFunction, favoriteActionName }) => (
  <div className={`station-card ${isActive ? 'active' : ''}`} onClick={() => setActiveRadiostation(station)}>
    <div className='background-icon'>
      <div className={`triangle centered ${isActive ? 'animated' : ''}`} />
      <div className={`innerCircle centered ${isActive ? 'animated' : ''}`} />
      <div className={`outerCircle centered ${isActive ? 'animated' : ''}`} />
    </div>

    <div className='card-title'>
      <div className='title'>{station.name}</div>
    </div>
    <div
      className='favorite-button-action'
      onClick={(e: FormEvent<HTMLDivElement>) => {
        e.stopPropagation();
        favoriteManageFunction(station);
      }}
    >
      <span className={`${favoriteActionName === 'remove' ? 'remove' : 'add'}`}>
        {favoriteActionName === 'remove' ? '-' : '+'}
      </span>
    </div>
  </div>
);

export default StationCard;
