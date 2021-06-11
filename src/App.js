import React from 'react';

import { MoviesProvider } from './contexts/MoviesContext';
import Routes from './Routes';

const App = () => (
  <MoviesProvider>
    <Routes />
  </MoviesProvider>
);

export default App;
