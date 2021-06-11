import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './views/Home'
import MovieInfo from './views/MovieInfo'
import PageNotFound from './views/PageNotFound'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movie Info</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/movie">
            <MovieInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
