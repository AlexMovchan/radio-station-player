import React, { useEffect, useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledVisualisationContainer } from './style';
import getRandomColor from '../../helpers/getRandomColor';

const Visualizator = ({ isPaused }) => {
  const [visualizatorCollection] = useState(() => document.getElementsByClassName('visualisation-column'))
  let interval = useRef(null);

  const setStyleToVisualizator = useCallback((isResetHeight = false) => {
    const getRandomHeight = () => {
      return Math.random() * (120 - 0) + 0;
    }

    [...visualizatorCollection].forEach(line => {
      line.style.height = `${isResetHeight ? 0 : getRandomHeight()}px`;
      line.style.backgroundColor = getRandomColor();
    })
  }, [visualizatorCollection])

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
    <StyledVisualisationContainer>
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
      <div className='visualisation-column' />
    </StyledVisualisationContainer>
  )
};

Visualizator.propTypes = {
  isPaused: PropTypes.bool,
}

Visualizator.defaultProps = {
  isPaused: false,
}

const mapStateToProps = state => ({
  isPaused: state.track.isPaused,
})

export default connect(mapStateToProps)(Visualizator);