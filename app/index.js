import 'babel-polyfill'
import './app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Home, NotFound, About } from 'pages'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const dest = document.getElementById('content')

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        { /* Home (main) route */ }
        <IndexRoute component={Home}/>

        { /* Routes */ }
        <Route path='about' component={About}/>

        { /* Catch all route */ }
        <Route path='*' component={NotFound} status={404} />
      </Route>
    </Router>
  </div>
 , dest)
