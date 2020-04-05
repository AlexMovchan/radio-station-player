import React, { useEffect, useState, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';
import { getTrackInfo, ITrack } from '../../redux/reducers/track';
import { IStation } from '../Stations/types';
import { togglePlayAction } from '../../helpers/togglePlayAction';
import Equalizer from '../Visualizators/Equalizer';
import './Player.scss';

const Player = () => {
  const [value, changeVolumeValue] = useState<number>(100);
  const dispatch: Dispatch = useDispatch();
  const activeStation: IStation = useSelector((state: any) => state.track.activeStation, shallowEqual);
  const loading: boolean = useSelector((state: any) => state.track.loading);
  const trackInfo: ITrack = useSelector((state: any) => state.track.trackInfo, shallowEqual);
  const isPaused: boolean = useSelector((state: any) => state.track.isPaused);

  useEffect(() => {
    getTrackInfo(activeStation, trackInfo)(dispatch);
    const interval = setInterval(() => getTrackInfo(activeStation, trackInfo)(dispatch), 3000);

    return () => clearInterval(interval);
  }, [activeStation, dispatch, trackInfo]);

  return (
    <div className='header'>
      {!isPaused ? (
        <Helmet>
          <title>{activeStation.name}</title>
        </Helmet>
      ) : (
        ''
      )}
      <ReactPlayer playing={!isPaused} url={activeStation.url} volume={value / 100} width={0} />
      <Equalizer visualLinesCount={140} heightRandomLimit={80} />
      <div className='player-container'>
        {trackInfo && !loading ? (
          <div className='track-info-block'>
            <div
              className='track-icon'
              style={{
                backgroundImage: trackInfo.image600
                  ? `URL(${trackInfo.image600})`
                  : 'URL(./img/default-album-logo.png)',
              }}
            />
            <div>
              <div>
                <a
                  href={`https://www.google.com/search?q=${trackInfo.artist} - ${trackInfo.title} скачать`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {trackInfo.artist}
                </a>
              </div>
              <div>
                <a
                  href={`https://www.google.com/search?q=${trackInfo.artist} - ${trackInfo.title} скачать`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {trackInfo.title}
                </a>
              </div>
            </div>
          </div>
        ) : (
          'Loading ...'
        )}
        <div className='player-controls'>
          <input
            className='volume-control'
            type='range'
            min='0'
            max='100'
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => changeVolumeValue(Number(e.target.value))}
          />
          <div
            className='play-btn'
            onClick={() => togglePlayAction(isPaused, dispatch)}
            style={{ backgroundImage: isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)' }}
          />
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

export default Player;