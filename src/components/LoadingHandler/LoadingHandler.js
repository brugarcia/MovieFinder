import PropTypes from 'prop-types';
import React from 'react';

import StyledLoadingHandler from './StyledLoadingHandler';

const LoadingHandler = ({
  children,
  dataStatus,
  errorMessage,
  loadingMessage,
}) => (
  <StyledLoadingHandler>
    {dataStatus === 'loaded' && (
      <>{children}</>
    )}
    {dataStatus === 'loading' && (
      <div className="message">{loadingMessage}</div>
    )}
    {dataStatus === 'error' && (
      <div className="message">{errorMessage}</div>
    )}
  </StyledLoadingHandler>
);

LoadingHandler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dataStatus: PropTypes.string,
  errorMessage: PropTypes.string,
  loadingMessage: PropTypes.string,
};

LoadingHandler.defaultProps = {
  dataStatus: '',
  errorMessage: 'Erro ao carregar dados',
  loadingMessage: 'Carregando...',
};

export default LoadingHandler;
