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

  :hover .movie-image {
    opacity: 0.4;
  }

  :hover .movie-title {
    display: block;
  }

  .movie-title {
    text-align: center;
    position: absolute;
    max-width: 180px;
    font-size: 20px;
    color: #e81d25;
    display: none;
  }

`;

export default StyledMovieListItem;
