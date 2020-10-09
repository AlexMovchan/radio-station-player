import React, { FC, useEffect, useState, ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';
import { getTrackInfo, ITrack } from '../../redux/reducers/track';
import { IStation } from '../Stations/types';
import { setPauseStatus } from '../../redux/reducers/track';
import Equalizer from '../Visualizators/Equalizer';
import './Player.scss';

interface IProps {
  activeStation: IStation;
  isPaused: boolean;
  trackInfo: ITrack;
  loading: boolean;
  dispatch: (action: any) => void;
}

const Player: FC<IProps> = (props) => {
  const [value, changeVolumeValue] = useState<number>(70);
  const { activeStation, trackInfo, isPaused, loading, dispatch } = props;

  useEffect(() => {
    dispatch(getTrackInfo(activeStation));
    const interval = setInterval(() => dispatch(getTrackInfo(activeStation)), 3000);

    return () => clearInterval(interval);
  }, [activeStation.id, dispatch]);

  return (
    <div className='header'>
      {!isPaused && <Helmet><title>{activeStation.name}</title></Helmet>}
      <ReactPlayer playing={!isPaused} url={activeStation.url} volume={value / 100} width={0} />
      <Equalizer visualLinesCount={140} heightRandomLimit={80} />
      <div className='player-container'>
        {trackInfo && !loading
          ? (
            <div className='track-info-block'>
              <div
                className='track-icon'
                style={{ backgroundImage: trackInfo.image600
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
                    <br />
                    {trackInfo.title}
                  </a>
                </div>
              </div>
            </div>
          )
          : 'Loading ...'
        }
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
            onClick={() => dispatch(setPauseStatus(!isPaused))}
            style={{ backgroundImage: isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)' }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  activeStation: state.track.activeStation,
  loading: state.track.loading,
  trackInfo: state.track.trackInfo,
  isPaused: state.track.isPaused,
})

export default connect(mapStateToProps)(Player);
