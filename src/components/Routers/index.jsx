import React from  'react';
import Register from "../../container/Register/register";
import Catalog from "../../container/Catalog/index";
import PutPassword from "../../container/PostPassword";
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
import { TutorForm } from '../TutorForm';
import TutorQualification from '../TutorMenu';
import TutorAddCourse from '../TutorAddCourse';

export function Routers(){
  const user = useSelector(state => state.userRedusers.user)
  function isAuthorized() {
    return !!user
  } 
  return (
      <Router>
        <StateHeader/>
        <Switch>
          <ProtectedRoute exact path='/Mtutor' isAuthorized={!isAuthorized()} component={Main} role={user}/>
          <ProtectedRoute path='/home' component={Home} isAuthorized={isAuthorized()}/>
          <ProtectedRoute path='/tutorQual' component={TutorQualification} isAuthorized={isAuthorized()}/>
          <ProtectedRoute path='/tutorForm' component={TutorForm} isAuthorized={isAuthorized()}/>
          <ProtectedRoute path='/tutorAddCourse' component={TutorAddCourse} isAuthorized={isAuthorized()}/>
          <ProtectedRoute path='/chooseRole' component={Catalog} isAuthorized={!isAuthorized()}/>
          <ProtectedRoute path='/register' component={Register} isAuthorized={!isAuthorized()}/>
          <ProtectedRoute path='/password' component={PutPassword} isAuthorized={!isAuthorized()}/>
        </Switch>
        <Footer/>
      </Router>
      )
}
