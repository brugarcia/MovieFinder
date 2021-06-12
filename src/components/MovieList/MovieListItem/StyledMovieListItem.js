import styled from 'styled-components';

const StyledMovieListItem = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  margin: 8px;
  padding: 24px;
  padding-bottom: 32px;

  opacity: 0.8;

  :hover {
    opacity: 1;
  }


`;

export default StyledMovieListItem;
