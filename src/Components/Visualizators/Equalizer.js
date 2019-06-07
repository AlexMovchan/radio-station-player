import React, { useEffect, useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledEqualizerContainer } from './style';
import getRandomColor from '../../helpers/getRandomColor';

const initialState = (visualLinesCount, heightRandomLimit) => (
  [...new Array(visualLinesCount)].map((item, index) => ({
    id: index,
    height: Math.random() * (heightRandomLimit - 0) + 0,
    backgroundColor: getRandomColor(),
  }))
)

const Equalizer = ({ isPaused, visualLinesCount = 9, heightRandomLimit = 90 }) => {
  // const [visualizatorCollection] = useState(() => document.getElementsByClassName('visualisation-column'))
  const [visualizatorCollection, changeCollection] = useState(() => initialState(visualLinesCount, heightRandomLimit))
  let interval = useRef(null);

  const setStyleToVisualizator = useCallback((isResetHeight = false) => {
    const getRandomHeight = () => {
      return Math.random() * (heightRandomLimit - 0) + 0;
    }

    const changedStyleArray = visualizatorCollection.map(item => ({
      height: `${isResetHeight ? 0 : getRandomHeight()}px`,
      backgroundColor: getRandomColor(),
    }))

    changeCollection(changedStyleArray)

  }, [visualizatorCollection.length, isPaused])

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval);
      setStyleToVisualizator(true)
    } else {
      interval = setInterval(setStyleToVisualizator, 200)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused])

  return (
    <StyledEqualizerContainer>
      {visualizatorCollection.map(item => (
        <div
          key={item.id}
          className='visualisation-column'
          style={{ height: item.height, backgroundColor: item.backgroundColor }}
        />
      ))}
    </StyledEqualizerContainer>
  )
};

Equalizer.propTypes = {
  isPaused: PropTypes.bool,
}

Equalizer.defaultProps = {
  isPaused: false,
}

const mapStateToProps = state => ({
  isPaused: state.track.isPaused,
})

export default connect(mapStateToProps)(Equalizer);