import styled from 'styled-components';

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: row;
  color: red;
  justify-content: space-between;

  .infos {
    margin: 30px 50px;
  }

  .mini-infos {
    display: flex;
    flex-direction: row;
  }

  .date {
    margin-right: 10px
  }

  .title {
    font-size: 40px;
  }

  .overview {
    color: #fff
  }

  .movie-image {
    margin: 30px 50px;
  }
`;

export default StyledMovieDetails;
