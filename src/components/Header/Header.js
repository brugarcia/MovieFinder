import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

const Header = ({
  text,
}) => (
  <StyledHeader>{text}</StyledHeader>
);

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: '',
};

export default Header;
