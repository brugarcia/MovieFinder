import styled from 'styled-components';

const StyledMovieList = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  max-height: unset;
  padding-bottom: 40px;

  overflow-y: hidden;
  :hover {
    overflow-y: overlay;
  }
`;

export default StyledMovieList;
