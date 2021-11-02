import React from  'react';
import Register from "../../container/Register/register";
import Catalog from "../../container/Catalog/index";
import PutPassword from "../../container/PostPassword";
import Footer from "../Footer/Footer";
import Home from "../ForStudent/Home";
import HeaderForTutor from '../../components/ForTutor/HeaderForTutor'
import HeaderForStudent from "../ForStudent/HeaderStudent";
import Main from '../Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProtectedRoute } from '../ProtectedRoute';
import { useSelector } from 'react-redux';
import StateHeader from '../Header/StateHeader';

export function Routers(){
  const user = useSelector(state => state.userRedusers.user)
  
  function isAuthorized() {
    return !!user
  } 
  return (
      <Router>
        <StateHeader/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <ProtectedRoute path='/tutor' component={HeaderForTutor} isAuthorized={isAuthorized()} allowedRole={5} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/admin' component={HeaderForTutor} isAuthorized={isAuthorized()} allowedRole={5} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/student' component={HeaderForStudent} isAuthorized={isAuthorized()} allowedRole={10} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/home' component={Home} isAllowed/>
          <ProtectedRoute path='/chooseRole' component={Catalog} isAuthorized={!isAuthorized()}/>
          <ProtectedRoute path='/register' component={Register} isAuthorized={!isAuthorized()}/>
          <ProtectedRoute path='/password' component={PutPassword} isAuthorized={!isAuthorized()}/>
        </Switch>
        <Footer/>
      </Router>
      )
}
