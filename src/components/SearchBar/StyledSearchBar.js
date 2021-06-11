import styled, { css } from 'styled-components';

const StyledSearchBar = styled.input`
  background-color: #fff;
  color: #e81d25;
  font-size: 16px;
  margin: 20px 20px;
  padding: 10px;
  width: 100%;

  border: 3px solid #e81d25;
  border-radius: 8px;


  ${({ icon }) => icon
    && css`
      background: url(${icon}) no-repeat scroll 10px 10px;
      padding-left: 30px;
    `}
`;

export default StyledSearchBar;
