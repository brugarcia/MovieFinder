import React from 'react';
import PropTypes from 'prop-types';
import StyledFooter from './StyledFooter';

const Footer = ({
  text,
}) => (
  <StyledFooter>{text}</StyledFooter>
);

Footer.propTypes = {
  text: PropTypes.string,
};

Footer.defaultProps = {
  text: '',
};

export default Footer;
