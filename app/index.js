import React from 'react'
import ReactDOM from 'react-dom' 
import {BrowserRouter as Router,HashRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom'

import A from './a'
import B from './b'
import C from './c'
import Error from './error'
import Nav from './nav'

ReactDOM.render(
  // forceRefresh={true} 是否从服务器取
  <Router basename="all" >
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" className="blue" component={A} />
        <Route path="/b" component={B} />
        <Route path="/c/:a/:b" component={C} />
        <Redirect from="/redirect" to="/b" />
        <Route  component={Error} />
        
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
)