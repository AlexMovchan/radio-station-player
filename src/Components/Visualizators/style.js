import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledEqualizerContainer = styled.div `
    width: 100%;
    height: inherit;
    display: flex;
    align-items: flex-end;
	overflow: hidden;
    position: absolute;
    background: transparent;

    .visualisation-column {
        width: 100%;
        transition: .2s;
    }
`

export const StyledRotateContainer = styled.div `
    position: absolute;
    width: 70px;
    height: 70px;
    margin: 30px 0;
    background-image: URL(./img/default-album-logo.png);
    background-size: 70px;
    background-repeat: no-repeat;
    background-position: center;
    animation:  ${rotate} 5s linear infinite;

    @media (max-width: 600px) {
      z-index: 1;
      width: 20px;
      height: 20px;
      margin: 0px -60px;
      background-size: 20px;
    }
`