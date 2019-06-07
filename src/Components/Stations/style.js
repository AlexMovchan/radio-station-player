import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledHeader = styled.header`
  padding: 5px 0;
  height: 30px;
  overflow: hidden;

  h2 {
    margin: 5px 0;
  }

  @media (max-width: 600px) {
    height: 50px;
    padding: 5px;

    h2 {
      margin: 0;
    }
  }
`;

export const StyledFavorite = styled.div`
  display: block;
  overflow: hidden;
  border-right: 1px solid #e0e0e0;
  height: 90vh;
  width: 315px;
  padding: 5px;
  overflow-y: scroll;

  @media (max-width: 600px) {
    justify-content: space-around;
    width: 50%;
  }
`;

export const StyledStationsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  
  @media (max-width: 600px) {
    height: 90vh;
    overflow-y: scroll;
    justify-content: space-around;
    width: 50%;
  }
`

export const StyledFavoriteStationsList = styled.div`
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