import React from 'react';
import PropTypes from 'prop-types';
import StyledMain from './StyledMain';

const Main = ({
  children,
}) => (
  <StyledMain>{children}</StyledMain>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Main;
