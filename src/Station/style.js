import styled from 'styled-components';

const Player = styled.div `
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.isActive ? 'green' : 'grey'};
    cursor: pointer;
    
    &:hover {
        opacity: 0.6;
    }
`;

export default Player;
 