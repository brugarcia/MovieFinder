import React from 'react'

import { MoviesProvider } from './contexts/MoviesContext'
import Routes from './Routes'



const App = () => {

  return (
    <MoviesProvider>
      <Routes />
    </MoviesProvider>
  )
}

export default App
