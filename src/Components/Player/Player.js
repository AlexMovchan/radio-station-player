import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import {
	ControlsContainer,
	PlayBtn,
	TrackIcon,
	TrackInfo
} from './style';

const Player = ({ activeStation, togglePauseIcon, isPaused, getTrackInfo, trackInfo }) => {
	console.log(trackInfo);
	return (
		<Fragment>
			<audio src={`http://air.radiorecord.ru:805/${activeStation.prefix || 'rr'}_320`} id='audio' />
			<ControlsContainer>
				<PlayBtn isPaused={isPaused} onClick={togglePauseIcon} />
				<TrackInfo>
					<TrackIcon trackIcon={trackInfo.image600} />
					<h5><a href={trackInfo.itunesURL} target='_blank' rel='noopener noreferrer'>{trackInfo.artist} - {trackInfo.title}</a></h5>	
				</TrackInfo>

				<button onClick={getTrackInfo} >Oke </button>
			</ControlsContainer>
		</Fragment>
	);
};
Player.propTypes = {
	activeStation: PropTypes.object,
	togglePauseIcon: PropTypes.func,
	isPaused: PropTypes.bool,
	getTrackInfo: PropTypes.func,
	trackInfo: PropTypes.object
};

Player.defaultProps = {
	activeStation: {},
	togglePauseIcon: () => {},
	isPaused: true,
	getTrackInfo: () => {},
	trackInfo: {}
};

export default Player;