import styled from 'styled-components';

export const StyledContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`;

export const StyledHeader = styled.header `
    padding: 15px;
`;

export const StyledFavorite = styled.div `
    display: flex;
    border-bottom: 1px solid #c3c3c3;
    margin-bottom: 10px;
    width: 100%;
    
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`;
 
