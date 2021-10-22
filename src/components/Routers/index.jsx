import React from  'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
        </Switch>
      </Router>
  );
}