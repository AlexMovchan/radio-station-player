import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getRandomColor from '../../helpers/getRandomColor';
import('./Equalizer.scss');

const initialState = (visualLinesCount) => (
  [...new Array(visualLinesCount)].map((item, index) => ({
    id: index,
    height: 0,
    backgroundColor: getRandomColor(),
  }))
  );

const Equalizer = ({ isPaused, visualLinesCount, heightRandomLimit, interval }) => {
  const [visualizatorCollection, changeCollection] = useState(() => initialState(visualLinesCount));

  const setStyleToVisualizator = useCallback((isResetHeight = false) => {
    const getRandomHeight = () => Math.random() * (heightRandomLimit - 0) + 0;

    const changedStyleArray = visualizatorCollection.map(item => ({
      id: item.id,
      height: `${isResetHeight ? 0 : getRandomHeight()}px`,
      backgroundColor: getRandomColor(),
    }));

    changeCollection(changedStyleArray);

  }, [visualizatorCollection, heightRandomLimit]);

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval);
      setStyleToVisualizator(true);
    } else {
      interval = setInterval(setStyleToVisualizator, 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

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
  isPaused: PropTypes.bool,
  visualLinesCount: PropTypes.number,
  heightRandomLimit: PropTypes.number,
  interval: PropTypes.object.isRequired,
};

Equalizer.defaultProps = {
  isPaused: false,
  visualLinesCount: 9,
  heightRandomLimit: 90,
};

const mapStateToProps = state => ({
  isPaused: state.track.isPaused,
});

export default connect(mapStateToProps)(Equalizer);