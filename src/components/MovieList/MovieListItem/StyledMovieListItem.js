import styled from 'styled-components';

const StyledMovieListItem = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: #000;
  margin: 8px;
  padding: 20px;
  padding-bottom: 16px;

  border-radius: 20px;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  h2 {
    text-align: center;
    position: static;
    max-width: 180px;
    font-size: 15px;
    color: #e81d25;
  }

`;

export default StyledMovieListItem;
