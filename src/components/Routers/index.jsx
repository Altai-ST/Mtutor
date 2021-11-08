import React from  'react';
import Register from "../Register/register";
import Catalog from "../Catalog/index";
import PutPassword from "../PostPassword";
import Footer from "../Footer/Footer";
import Home from "../ForStudent/Home";
import Main from '../Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProtectedRoute } from '../ProtectedRoute';
import { useSelector } from 'react-redux';
import StateHeader from '../Header/StateHeader';
import TutorApplication from '../ForTutor/TutorApplication';

export function Routers(){
  const user = useSelector(state => state.userRedusers.user)



  function isAuthorized() {
    return user
  }
  console.log(isAuthorized())
  let auth = isAuthorized()
  return (
      <Router>
        <StateHeader/>
        <Switch>
        <Route exact path='/Mtutor' >
          <Main/>
        </Route>
          <ProtectedRoute path='/appTutor' component={TutorApplication}/>
          <ProtectedRoute path='/home' component={Home} isAllowed/>
          <ProtectedRoute path='/chooseRole' component={Catalog} isAllowed={!isAuthorized()}/>
          <ProtectedRoute path='/register' component={Register} isAllowed={!isAuthorized()}/>
          <ProtectedRoute path='/password' component={PutPassword} isAllowed={!isAuthorized()}/>
        </Switch>
        <Footer/>
      </Router>
      )
}
