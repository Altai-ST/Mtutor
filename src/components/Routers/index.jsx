import React from  'react';
import Register from "../Register/register";
import Catalog from "../Catalog/index";
import PutPassword from "../PostPassword";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginContent } from '../LoginContent';

export function Routers() {
  return (
      <Router>
        <Switch>
          <Route path='/chooseRole'>
            <Catalog/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/password'>
            <PutPassword/>
          </Route>
          <Route path='/Login'>
            <LoginContent/>
          </Route>
        </Switch>
      </Router>
  );
}