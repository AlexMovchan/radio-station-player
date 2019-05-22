import PropTypes from 'prop-types';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { API_URL } from '../../config';
import _ from 'lodash';

import { PlayerContainer, PlayBtn, TrackIcon, TrackInfo } from './style';

const Player = props => {
  const [trackInfo, setTrackInfo] = useState({});
  const {
    activeStation,
    togglePauseIcon,
    isPaused,
    player
  } = props;
  const interval = useRef();
  const trackInfoRef = useRef();

	// set request to API for track information (author, trackname, download link etc...)
  useEffect(() => {
    function getTrackInfo() {
      if (!activeStation.prefix) {
        return new Error('No active stations!');
      }
      const validUrl = `${API_URL}xml/${activeStation.prefix}_online_v8.txt`;
      fetch(validUrl)
        .then(res => res.json())
        .then(data => {
          if (!_.isEqual(data,  trackInfoRef.current)) {
            trackInfoRef.current = data;
            setTrackInfo(data);
          }}
        )
        .catch(err => console.error(err));
    }

    interval.current = setInterval(getTrackInfo, 3000);

    return () => clearInterval(interval.current);

  }, [activeStation]);

  return (
    <Fragment>
      <audio
        ref={player}
        src={`https://air.radiorecord.ru:805/${activeStation.prefix || 'rr'}_320`}
        id="audio"
      />
      <PlayerContainer>
        {
          trackInfo
            ?
              (
                <TrackInfo>
                  <TrackIcon trackIcon={trackInfo.image600} />
                  <div>
                    <div>
                      <a
                        href={trackInfo.itunesURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {trackInfo.artist}
                      </a>
                    </div>
                    <div>
                      <a
                        href={trackInfo.itunesURL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {trackInfo.title}
                      </a>
                    </div>
                  </div>
                </TrackInfo>
              )
            : ''
        }
        <PlayBtn isPaused={isPaused} onClick={togglePauseIcon} />
      </PlayerContainer>
    </Fragment>
  );
};

Player.propTypes = {
	activeStation: PropTypes.object,
	togglePauseIcon: PropTypes.func,
	isPaused: PropTypes.bool,
	trackInfo: PropTypes.object,
	player: PropTypes.object
};

Player.defaultProps = {
	activeStation: {},
	togglePauseIcon: () => { },
	isPaused: true,
	trackInfo: {},
	player: Node
};

export default Player;
