import styled from 'styled-components';

export const StyledStationCard = styled.div `
    position: relative;
    width: 130px;
    height: 130px;
    margin: 15px;
    background-image: ${props => `URL(./img/card-logo.png)`};
    background-position-x: center;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
    border: 1px solid #e0e0e0;
    text-align: center;
    box-shadow: 0 0 8px 1px #d6d6d6;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 600px) {
        height: 50px;
        margin: 10px;
        width: 150px;
    }
`;

export const StyledInfoContainer = styled.div `
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    position: relative;
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
        height: 30px;
    }
`;

export const StyledTrackName = styled.div `
    position: relative;
    font-size: ${props => props.isActive ? '16px' : '16px'};
    transition: all 1s;
    text-shadow: 1px 1px 2px white;
    padding: 3px;
    width: 100%;
    height: 18px;
    overflow: hidden;    
    background: #f7f7f7;

    @media (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledManageFavoriteListIcon = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100%;
    height: 20px;
    background-color: ${props => props.favoriteActionName === 'remove' ? '#f7a1a1' : '#c9ffc9'};
    z-index: 1111;
`;


export const StyledVisualisationContainer = styled.div `
    width: 130px;
    height: 110px;
    display: flex;
    align-items: flex-end;
	overflow: hidden;
    position: absolute;
    background: #bcbcbc;

    .visualisation-column {
        width: 26px;
        transition: .2s;
    }
`
