import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const PlayerContainer = styled.div `
	width: 600px;
	height: 60px;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;
    padding: 10px 5px;
	border-radius: 5px;
	`;

export const PlayBtn = styled.div `
	width: 50px;
	height: 50px;
	background-image: ${props => props.isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)'};
	background-size: 100%;
	background-position: center;
	cursor: pointer;
	/* animation: ${rotate} 5s linear infinite; */
`;

export const TrackIcon = styled.div `
	width: 50px;
	height: 50px;
	margin: 0 5px;
	background-image: ${props => props.trackIcon ? `URL(${props.trackIcon})` : 'URL(./img/default-album-logo.png)'};
	background-size: 90%;
	background-position: center;
	border: 1px solid white;
    background-repeat: no-repeat;
`;


export const TrackInfo = styled.div `
	display: flex;

	a {
		color: white;
		text-shadow: 1px 1px 1px black;
	}
`;
