import styled from 'styled-components';

export const PlayerContainer = styled.div `
	width: 600px;
	height: 60px;
	display: flex;
	flex-flow: row;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
	padding: 0 15px;
	border-radius: 5px;
	position: relative;
	z-index: 1;
	background: #def9ff;
	border: 1px solid black;
	box-shadow: 0 0 3px 2px #252525;
	`;

export const PlayBtn = styled.div `
	width: 50px;
	height: 50px;
	background-image: ${props => props.isPaused ? 'URL(./img/play.png)' : 'URL(./img/pause.png)'};
	background-size: 100%;
	background-position: center;
	cursor: pointer;
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

	a, span {
		color: #052633;
    text-shadow: 1px 1px 1px red;
	}
`;
