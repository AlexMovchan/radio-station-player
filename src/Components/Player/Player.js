import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
	PlayerContainer,
	PlayBtn,
	TrackIcon,
	TrackInfo
} from './style';

const Player = ({ activeStation, togglePauseIcon, isPaused, trackInfo }) => {
	return (
		<Fragment>
			<audio src={`http://air.radiorecord.ru:805/${activeStation.prefix || 'rr'}_320`} id='audio' />
			<PlayerContainer>
				<TrackInfo>
					<TrackIcon trackIcon={trackInfo.image600} />
					<div>
						<div><a href={trackInfo.itunesURL} target='_blank' rel='noopener noreferrer'>{trackInfo.artist}</a></div>	
						<div><a href={trackInfo.itunesURL} target='_blank' rel='noopener noreferrer'>{trackInfo.title}</a></div>
					</div>	
				</TrackInfo>
				<PlayBtn isPaused={isPaused} onClick={togglePauseIcon} />
			</PlayerContainer>
		</Fragment>
	);
};
Player.propTypes = {
	activeStation: PropTypes.object,
	togglePauseIcon: PropTypes.func,
	isPaused: PropTypes.bool,
	trackInfo: PropTypes.object
};

Player.defaultProps = {
	activeStation: {},
	togglePauseIcon: () => {},
	isPaused: true,
	trackInfo: {}
};

export default Player;