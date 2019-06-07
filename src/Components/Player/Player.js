import React, { Fragment, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { API_URL } from '../../config';
import { setPauseStatus, setData } from '../../redux/reducers/track';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Equalizer from '../Visualizators/Equalizer';
import { PlayerContainer, PlayBtn, TrackIcon, TrackInfo } from './style';

const Player = ({ interval, activeStation, loading, trackInfo, isPaused }) => {
  const dispatch = useDispatch();
  const trackInfoRef = useRef();
  let player = useRef();

  useEffect(() => {
		if (isPaused) {
      player.current.pause()
    } else {
      player.current.play();
    }
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
      <Equalizer
        visualLinesCount={140}
        heightRandomLimit={80}
      />
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
                        href={`https://www.google.com/search?q=${trackInfo.artist} - ${trackInfo.title} скачать`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {trackInfo.artist}
                      </a>
                    </div>
                    <div>
                      <span>
                        {trackInfo.title}
                      </span>
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
  isPaused: PropTypes.bool,
  trackInfo: PropTypes.object,
  loading: PropTypes.bool,
};

Player.defaultProps = {
  activeStation: {},
  interval: {},
  isPaused: false,
  trackInfo: {},
  loading: false,
};

const mapStateToProps = state => ({
  activeStation: state.track.activeStation,
  isPaused: state.track.isPaused,
  trackInfo: state.track.trackInfo,
  loading: state.track.loading
})

export default connect(mapStateToProps)(Player);
