import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { setData } from '../../redux/reducers/track';
import { togglePlayAction } from '../../helpers/togglePlayAction';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Equalizer from '../Visualizators/Equalizer';
import { PlayerContainer, PlayBtn, TrackIcon, TrackInfo, StyledControls, InputRange, StyledHeader } from './style';

const Player = ({ interval, activeStation, loading, trackInfo, isPaused, player }) => {
  const [value, changeVolumeValue] = useState(100);
  const dispatch = useDispatch();
  const trackInfoRef = useRef();

  useEffect(() => {
    player.current.volume = value/100
  }, [value])

  useEffect(() => {
    player.current.play();

    const getTrackInfo = async() => {
      try {
        const result = await axios.get(activeStation.textUrl);
        if (!_.isEqual(result.data,  trackInfoRef.current)) {
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
  }, [activeStation, interval]);

  return (
    <StyledHeader>
      <audio
        ref={player}
        volume=''
        src={activeStation.url}
        id="audio"
      />
      <Equalizer
        visualLinesCount={140}
        heightRandomLimit={80}
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
        <StyledControls>
          <InputRange value={value} onChange={(e) => changeVolumeValue(e.target.value)} />
          <PlayBtn isPaused={isPaused} onClick={() => togglePlayAction(isPaused, player, dispatch)} />
        </StyledControls>
      </PlayerContainer>
    </StyledHeader>
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
