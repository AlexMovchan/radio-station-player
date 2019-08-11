import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import getRandomColor from '../../helpers/getRandomColor';
import('./Equalizer.scss');

const initialState = visualLinesCount =>
  [...new Array(visualLinesCount)].map((item, index) => ({
    id: index,
    height: 0,
    backgroundColor: getRandomColor(),
  }));

const Equalizer = ({ visualLinesCount, heightRandomLimit }) => {
  const [visualizatorCollection, changeCollection] = useState(() => initialState(visualLinesCount));
  const isPaused = useSelector(state => state.track.isPaused);

  const setStyleToVisualizator = useCallback(
    (isResetHeight = false) => {
      const getRandomHeight = () => Math.random() * (heightRandomLimit - 0) + 0;

      const changedStyleArray = visualizatorCollection.map(item => ({
        id: item.id,
        height: `${isResetHeight ? 0 : getRandomHeight()}px`,
        backgroundColor: getRandomColor(),
      }));

      changeCollection(changedStyleArray);
    },
    [visualizatorCollection, heightRandomLimit]
  );

  useEffect(() => {
    if (isPaused) {
      setStyleToVisualizator(true);
    } else {
      const interval = setInterval(setStyleToVisualizator, 200);
      return () => clearInterval(interval);
    }
  }, [isPaused, setStyleToVisualizator]);

  return (
    <div className='equalizer-container'>
      {visualizatorCollection.map(item => (
        <div
          key={item.id}
          className='visualisation-column'
          style={{ height: item.height, backgroundColor: item.backgroundColor }}
        />
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
