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
    background-image: ${props => `URL(./img/${props.prefix}.png)`};
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
    background: #dedede;
    transition: all 1s;
    opacity: 0.7;
`;

export const BackgroundGradientUp = styled.div `
    position: absolute;
    width: 130px;
    height: ${props => props.isActive ? '130px' : '0'};
    top: ${props => props.isActive ? '0' : '130px'};
    left: 0;
    background: #dedede;
    transition: all 1s;
    opacity: 0.7;
`;

export const TrackName = styled.div `
    position: relative;
    font-size: ${props => props.isActive ? '30px' : '16px'};
    transition: all 1s;
    text-shadow: 1px 1px 2px white;
`;

