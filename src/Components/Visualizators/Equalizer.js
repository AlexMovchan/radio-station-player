import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import getRandomColor from '../../helpers/getRandomColor';
import './Equalizer.scss';

const getRandomHeight = heightRandomLimit => `${Math.random() * (heightRandomLimit - 0) + 0}px`;

const buildEqualizer = (arr, height) =>
  arr.map(item => ({
    id: item.id,
    backgroundColor: getRandomColor(),
    height: height(),
  }));

const getInitialState = visualLinesCount => {
  const array = [...new Array(visualLinesCount).keys()].map(id => ({ id }));
  return buildEqualizer(array, () => '0px');
};

const Equalizer = ({ visualLinesCount, heightRandomLimit }) => {
  const [visualizatorCollection, changeCollection] = useState(() => getInitialState(visualLinesCount));
  const isPaused = useSelector(state => state.track.isPaused);

  const setStyleToVisualizator = (isResetHeight = false) => {
    const height = isResetHeight ? () => '0px' : () => getRandomHeight(heightRandomLimit);
    const changedStyleArray = buildEqualizer(visualizatorCollection, height);

    changeCollection(changedStyleArray);
  };

  useEffect(() => {
    if (isPaused) {
      setStyleToVisualizator(true);
    } else {
      const interval = setInterval(setStyleToVisualizator, 200);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className='equalizer-container'>
      {visualizatorCollection.map(({ id, height, backgroundColor }) => (
        <div key={id} className='visualisation-column' style={{ height, backgroundColor }} />
      ))}
    </div>
  );
};

Equalizer.propTypes = {
  visualLinesCount: PropTypes.number,
  heightRandomLimit: PropTypes.number,
};

Equalizer.defaultProps = {
  visualLinesCount: 9,
  heightRandomLimit: 90,
};

export default Equalizer;
