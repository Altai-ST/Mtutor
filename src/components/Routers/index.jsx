import React from  'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from '../Admin';
import Add from '../Admin/Coureses/Add/index'
import Edit from '../Admin/Coureses/Edit';


export function Routers() {
  return (
      <Router>
        <Switch>
          <Route path='/chooseRole'>
            
          </Route>
          <Route path='/register'>
            
          </Route>
          <Route path='/password'>
            
          </Route>
          <Route path='/Login'>
            
          </Route>
          <Route path='/add' component={Add}/>
          <Route path='/edit' component={Edit}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </Router>
  );
}