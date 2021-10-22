import React from  'react';
import Register from "../Register/register";
import Catalog from "../Catalog/index";
import PutPassword from "../PostPassword";
import LoginModal from "../LoginModal";
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
            <Catalog/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/password'>
            <PutPassword/>
          </Route>
          <Route path='/Login'>
            <LoginModal/>
          </Route>
        </Switch>
      </Router>
  );
}