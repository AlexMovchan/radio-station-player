import { setPauseStatus } from '../redux/reducers/track';

export const togglePlayAction = (isPaused: boolean, dispatch: Function) => {
  if (isPaused) {
    dispatch(setPauseStatus(false));
  } else {
    dispatch(setPauseStatus(true));
  }
};

export default togglePlayAction;

