import React, { Fragment, useEffect, useRef, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { API_URL } from '../../config';
import reducer, { initialState, setPauseStatus, setData } from '../../redux/playerData';
import { PlayerContainer, PlayBtn, TrackIcon, TrackInfo } from './style';

const Player = ({ interval, activeStation }) => {
  const [{ loading, trackInfo, isPaused }, dispatch] = useReducer(reducer, initialState);

  const trackInfoRef = useRef();
  let player = useRef();

  useEffect(() => {
		isPaused ? player.current.pause() :	player.current.play();
  }, [isPaused]);
  
  useEffect(() => {
    player.current.play();

    const getTrackInfo = async() => {
      const validUrl = `${API_URL}xml/${activeStation.prefix}_online_v8.txt`;
      try {
        const result = await axios.get(validUrl);
        if (!_.isEqual(result.data,  trackInfoRef.current)) {
          trackInfoRef.current = result.data;
          dispatch(setData(result.data));
        }
      } catch (err) {
        console.error(err.error);
      }
    };

    getTrackInfo();
    interval.current = setInterval(getTrackInfo, 3000);

    return () =>
      clearInterval(interval.current);
  }, [activeStation, interval]);

	const togglePauseIcon = () => {
		if (!player.current.paused) {
			dispatch(setPauseStatus(true));
		} else {
			dispatch(setPauseStatus(false));
		}
	};

  return (
    <Fragment>
      <audio
        ref={player}
        src={`https://air.radiorecord.ru:805/${activeStation.prefix || 'rr'}_320`}
        id="audio"
      />
      <PlayerContainer>
        {
          trackInfo && !loading 
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
            : 'Loading ...'
        }
        <PlayBtn isPaused={isPaused} onClick={togglePauseIcon} />
      </PlayerContainer>
    </Fragment>
  );
};

Player.propTypes = {
	activeStation: PropTypes.object,
  interval: PropTypes.object,
};

Player.defaultProps = {
  activeStation: {},
  interval: {},
};

export default Player;
