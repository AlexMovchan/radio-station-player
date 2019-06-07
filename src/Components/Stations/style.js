import styled from 'styled-components';

export const StyledContainer = styled.div `
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StyledHeader = styled.header `
    padding: 15px;
    height: 80px;
    overflow: hidden;

    @media (max-width: 600px) {
        height: 100px;
    }
`;

export const StyledFavorite = styled.div `
    display: block;
    overflow: hidden;
`;

export const StyledStationsList = styled.div `
    display: flex;
    flex-flow: row wrap;
    border-left: 1px solid #c3c3c3;
    width: 80%;
    
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`
 
export const StyledFavoriteStationsList = styled.div `
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: stretch;
    margin-bottom: 10px;
    width: 325px;
    overflow: hidden;
    
    @media (max-width: 600px) {
        justify-content: space-around;
        width: 100%;
    }
`