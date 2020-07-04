import React, { useEffect, useState } from 'react';
import { compose, tap, identity, nth } from 'ramda';
import { saveToLocalStorage, getFromLocalStorage } from '../../helpers/localStorageManager';
import { fork } from '../../helpers/fpCombinators';
import allForesigns from '../../foresight.json';
import './Foresight.scss';

const randomIndex = (foresigns: string[]) => Math.random() * Math.floor(foresigns.length);
const getRandomArrayIndex = compose(Math.floor, randomIndex);

const getOneForesign = fork(nth, getRandomArrayIndex, identity);

const Foresight = () => {
  const [marginRight, setMarginRight] = useState(0);
  const [currentForesign, setForesignToState] = useState(getFromLocalStorage('ForesightText'))

  const lastUsedForesightDate: string | null = getFromLocalStorage('ForesightDay');
  const todaysDay: number = (new Date()).getDay();
  const foresignContainerMargin: number = marginRight ? 0 : -320;

  const toggleContainer = () => setMarginRight(foresignContainerMargin);

  const generateForesign = compose(
    tap(setForesignToState),
    tap(saveToLocalStorage('ForesightText')),
    getOneForesign,
  )

  useEffect(() => {
    if (Number(lastUsedForesightDate) !== Number(todaysDay)) {
      saveToLocalStorage('ForesightText', '')
      saveToLocalStorage('ForesightDay', todaysDay.toString());
    }
  }, [lastUsedForesightDate, todaysDay]);

  return (
    <div className='foresight-container' style={{ right: `${marginRight}px`}}>
      <h4>Передбачення на сьогодні:</h4>
      <p>
        {Number(lastUsedForesightDate) !== todaysDay || !currentForesign
          ? <button onClick={() => generateForesign(allForesigns)}>Отримати передбачення!</button>
          : currentForesign
        }
      </p>
      <div className='action-arrow' onClick={toggleContainer}>{marginRight ? '🡄' : '🡆'}</div>
    </div>
  );
};

export default Foresight;
