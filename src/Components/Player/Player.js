import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { setData } from '../../redux/reducers/track';
import { togglePlayAction } from '../../helpers/togglePlayAction';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Equalizer from '../Visualizators/Equalizer';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';
import('./Player.scss');

const Player = ({ interval, activeStation, loading, trackInfo, isPaused }) => {
  const [value, changeVolumeValue] = useState(100);
  const dispatch = useDispatch();
  const trackInfoRef = useRef();
  const intervalForEqualizer = useRef(null);

  useEffect(() => {
    const getTrackInfo = async() => {
      try {
        const result = await axios.get(activeStation.textUrl);
        if (!_.isEqual(result.data,  trackInfoRef.current) && typeof result.data === 'object') {
          trackInfoRef.current = result.data;
          dispatch(setData(result.data));
        }
      } catch (err) {
        console.error(err);
      }
    };

    getTrackInfo();
    interval.current = setInterval(getTrackInfo, 3000);

    return () =>
      clearInterval(interval.current);
  }, [activeStation, interval, dispatch]);

  return (
    <div className="header">
      {
        !isPaused
          ?
            (
              <Helmet>
                <title>{activeStation.name}</title>
              </Helmet>
            )
          : ''
      }
      <ReactPlayer
        playing={!isPaused}
        url={activeStation.url}
        volume={value/100}
        width={0}
      />
      <Equalizer
        visualLinesCount={140}
        heightRandomLimit={80}
        interval={intervalForEqualizer}
      />
      <div className='player-container'>
        {
          trackInfo && !loading
            ?
              (
                <div className='track-info-block'>
                  <div className='track-icon' style={{ backgroundImage: trackInfo.image600 ? `URL(${trackInfo.image600})` : 'URL(./img/default-album-logo.png)' }} />
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
                      <a
                        href={`https://www.google.com/search?q=${trackInfo.artist} - ${trackInfo.title} скачать`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {trackInfo.title}
                      </a>
                    </div>
                  </div>
                </div>
              )
            : 'Loading ...'
        }
        <div className='player-controls'>
          <input className='volume-control' type='range' min='0' max='100' value={value} onChange={(e) => changeVolumeValue(e.target.value)} />
          <div className='play-btn' onClick={() => togglePlayAction(isPaused, dispatch)} style={{ backgroundImage: isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)' }} />
        </div>
      </div>
    </div>
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
});

export default connect(mapStateToProps)(Player);
