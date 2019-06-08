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
	background-size: 50px;
	cursor: pointer;
	border-radius: 50%;

	&:active {
		transform: scale(0.97);;
	}
`;

export const StyledControls = styled.div `
	width: 200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
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

export const InputRange = styled.input.attrs({ type: 'range', value: props => props.value, min: "0", max: "100" }) `
	-webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  width: 120px;
  height: 15px;
  margin: 0;
  border: none;
  padding: 1px 2px;
  border-radius: 14px;
  background: #232528;
  box-shadow: inset 0 1px 0 0 #0d0e0f, inset 0 -1px 0 0 #3a3d42;
  -webkit-box-shadow: inset 0 1px 0 0 #0d0e0f, inset 0 -1px 0 0 #3a3d42;
  outline: none; /* no focus outline */

	&::-moz-range-track {
		border: inherit;
		background: transparent;
	}

	&::-ms-track {
		border: inherit;
		color: transparent; /* don't drawn vertical reference line */
		background: transparent;
	}
	
	&::-ms-fill-lower, &::-ms-fill-upper {
		background: transparent;
	}

	&::-ms-tooltip {
		display: none;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 25px;
		height: 13px;
		border: none;
		border-radius: 12px;
		background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #529de1), color-stop(100%, #245e8f)); /* android <= 2.2 */
		background-image: -webkit-linear-gradient(top , #529de1 0, #245e8f 100%); /* older mobile safari and android > 2.2 */;
		background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); /* W3C */
	}

	&::-moz-range-thumb {
		width: 40px;
		height: 18px;
		border: none;
		border-radius: 12px;
		background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); /* W3C */
	}

	&::-ms-thumb {
		width: 40px;
		height: 18px;
		border-radius: 12px;
		border: 0;
		background-image: linear-gradient(to bottom, #529de1 0, #245e8f 100%); /* W3C */
	}
`