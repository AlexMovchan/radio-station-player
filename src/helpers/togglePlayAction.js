import { setPauseStatus } from '../redux/reducers/track';

export const togglePlayAction = (isPaused, player, dispatch) => {
  if (isPaused) {
    dispatch(setPauseStatus(false));
    player.current.play();
  } else {
    player.current.pause();
    dispatch(setPauseStatus(true));
  }
};

export default togglePlayAction;

