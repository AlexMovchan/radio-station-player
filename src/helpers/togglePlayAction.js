import { setPauseStatus } from '../redux/reducers/track';

export const togglePlayAction = (isPaused, dispatch) => {
  if (isPaused) {
    dispatch(setPauseStatus(false));
  } else {
    dispatch(setPauseStatus(true));
  }
};

export default togglePlayAction;

