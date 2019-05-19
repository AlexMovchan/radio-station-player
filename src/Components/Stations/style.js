import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-flow: row wrap;
`;
 
export const StationCard = styled.div `
    position: relative;
    width: 130px;
    height: 130px;
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

export const InfoContainer = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    position: relative;
    background: ${props => props.isActive ? '#d4ffc394' : 'transparent'};
    &::before {
        content: '😎';
        display: ${props => props.isActive ? 'block' : 'none'};
        width: 24px;
        height: 24px;
        position: absolute;
        left: 5px;
        top: 5px;
    }
`;

export const TrackName = styled.div `
    position: relative;
    font-size: ${props => props.isActive ? '16px' : '16px'};
    transition: all 1s;
    text-shadow: 1px 1px 2px white;
    padding: 10px;
    width: 100%;
    background: #f7f7f7;
`;

