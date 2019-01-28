import React, { Fragment } from 'react';
import Player from './style';

const Station = ({ station, setActiveRadiostation, isActive}) =>
	<Player isActive={isActive === station.id} onClick={() => setActiveRadiostation(station)} >
		<audio src={`http://air.radiorecord.ru:805/${station.prefix}_320`}></audio>
		
		<div className='info'>
			<div className='name'>{station.name}</div>
		</div>
		<div className='btns'>
			<div className="play-icon">Play</div>
		</div>
	</Player>;

export default Station;