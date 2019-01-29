import styled from 'styled-components';

export const ControlsContainer = styled.header `
	width: 100%;
	height: 50px;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
`;

export const PlayBtn = styled.div `
	width: 50px;
	height: 50px;
	background-image: ${props => props.isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)'};
	background-size: 100%;
	background-position: center;
`;

export const TrackIcon = styled.div `
	width: 50px;
	height: 50px;
	background-image: ${props => props.trackIcon ? `URL(${props.trackIcon})` : 'none'};
	background-size: 100%;
	background-position: center;
`;

export const TrackInfo = styled.div `
	display: flex;
`;
