import React, { useEffect, useState } from 'react';
import axios from 'axios';
import('./Foresight.scss');

const setForesightText = text => window.localStorage.setItem('ForesightText', text);
const getForesightText = () => window.localStorage.getItem('ForesightText');
const setForesightDay = date => window.localStorage.setItem('ForesightDay', date);
const getForesightDay = () => window.localStorage.getItem('ForesightDay');

const Foresight = () => {
  const [foresight, setForesight] = useState(() => getForesightText());
  const [marginRight, setMarginRight] = useState(0);


  const lastUsedForesightDate = getForesightDay();
  const todaysDate = (new Date()).getDay();

  useEffect(() => {
    if (Number(lastUsedForesightDate) !== Number(todaysDate)) {
      setForesightText('');
      setForesightDay(todaysDate);
    }
  }, [lastUsedForesightDate, todaysDate]);

  const getForesight = async() => {
    const result = await axios.get('./foresight.json');
    if (result.data) {
      const arrayIndex = Math.floor(Math.random() * Math.floor(result.data.length));
      setForesightText(result.data[arrayIndex]);
      setForesight(result.data[arrayIndex]);
    }
  };

  const toggleContainer = () => {
    marginRight ? setMarginRight(0) : setMarginRight(-320);
  };

  return (
    <div className='foresight-container' style={{ right: `${marginRight}px`}}>
      <h4>Передбачення на сьогодні:</h4>
      <p>
        {Number(lastUsedForesightDate) !== Number(todaysDate) || !foresight || foresight === 'null'
          ? <button onClick={getForesight}>Отримати передбачення!</button>
          : foresight
        }
      </p>
      <div className='action-arrow' onClick={toggleContainer}>{marginRight ? '🡄' : '🡆'}</div>
    </div>
  );
};

export default Foresight;
