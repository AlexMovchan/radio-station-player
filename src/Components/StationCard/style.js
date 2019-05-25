import styled from 'styled-components';

export const StyledStationCard = styled.div `
    position: relative;
    width: 130px;
    height: 130px;
    margin: 15px;
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

    @media (max-width: 600px) {
        height: 40px;
        margin: 10px;
        width: 150px;
    }
`;

export const StyledInfoContainer = styled.div `
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
        
        @media (max-width: 600px) {
            content: '';
        }
    }

 
    @media (max-width: 600px) {
        align-items: center;
        background: #f7f7f7;
    }
`;

export const StyledTrackName = styled.div `
    position: relative;
    font-size: ${props => props.isActive ? '16px' : '16px'};
    transition: all 1s;
    text-shadow: 1px 1px 2px white;
    padding: 10px;
    width: 100%;
    background: #f7f7f7;

    @media (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledManageFavoriteListIcon = styled.div `
    position: absolute;
    top: -15px;
    right: -15px;
    font-size: 14px;
    width: 15px;
    height: 15px;
    background-color: ${props => props.favoriteActionName === 'remove' ? '#f7a1a1' : '#c9ffc9'};
    z-index: 1111;

    &::before {
        content: ${props => props.favoriteActionName === 'remove' ? '"-"' : '"+"'};
        width: 15px;
        height: 15px;
        
        @media (max-width: 600px) {
            width: 30px;
            height: 40px;
        }
    }

    @media (max-width: 600px) {
        position: relative;
        top: 1px;
        right: 1px;
        font-size: 30px;
        width: 30px;
        height: 40px;
        border: 1px solid #e0e0e0;
    }
`;

