import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-flow: row wrap;
`;
 
export const StationCart = styled.div `
    position: relative;
    width: 110px;
    height: 110px;
    padding: 10px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: ${props => props.isActive ? 'center' : 'flex-end'};
    background-image: ${props => props.isActive ? 'none' : `URL(./img/${props.prefix}.png)`};
    background-position-x: center;
    background-size: 80%;
    background-repeat: no-repeat;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    text-align: center;

    &:hover {
        opacity: 0.6;
    }
`;

export const BackgroundGradientDown = styled.div `
    position: absolute;
    width: 130px;
    height: ${props => props.isActive ? '130px' : '0'};
    top: 0;
    left: 0;
    background: #d6ffc9;
    transition: all 1s;
`;

export const BackgroundGradientUp = styled.div `
    position: absolute;
    width: 130px;
    height: ${props => props.isActive ? '130px' : '0'};
    top: ${props => props.isActive ? '0' : '130px'};
    left: 0;
    background: #d6ffc9;
    transition: all 1s;
`;

export const TrackName = styled.div `
    position: relative;
`;

