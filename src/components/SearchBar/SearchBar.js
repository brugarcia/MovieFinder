import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchBar from './StyledSearchBar';

const SearchBar = ({
  icon, onKeyDown, placeholder,
}) => (
  <StyledSearchBar
    type="text"
    icon={icon}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
  />
);

SearchBar.propTypes = {
  icon: PropTypes.node,
  onKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  icon: null,
  placeholder: '',
};

export default SearchBar;
