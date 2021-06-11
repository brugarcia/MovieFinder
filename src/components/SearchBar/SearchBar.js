import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './StyledSearchBar';

const SearchBar = ({
  icon, onKeyDown,
}) => (
  <StyledSearchBar
    type="text"
    icon={icon}
    onKeyDown={onKeyDown}
  />
);

SearchBar.propTypes = {
  icon: PropTypes.node,
  onKeyDown: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  icon: null,
};

export default SearchBar;
