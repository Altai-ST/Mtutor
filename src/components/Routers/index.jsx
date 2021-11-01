import React from  'react';
import Register from "../Register/register";
import Catalog from "../Catalog/index";
import PutPassword from "../PostPassword";
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

  console.log(user)
  function isAuthorized() {
    return user
  }
  console.log(isAuthorized())
  let auth = isAuthorized()
  return (
      <Router>
       {user === '' && <StateHeader/>}
        <Switch>
        <Route exact path='/' >
          <Main/>
        </Route>
          <ProtectedRoute path='/tutor' component={HeaderForTutor} isAuthorized={auth} allowedRole={5} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/admin' component={HeaderForTutor} isAuthorized={auth} allowedRole={5} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/student' component={HeaderForStudent} isAuthorized={auth} allowedRole={10} currentRole={user !=='' && user.role.role}/>
          <ProtectedRoute path='/home' component={Home} isAllowed/>
          <ProtectedRoute path='/chooseRole' component={Catalog} isAllowed={!isAuthorized()}/>
          <ProtectedRoute path='/register' component={Register} isAllowed={!isAuthorized()}/>
          <ProtectedRoute path='/password' component={PutPassword} isAllowed={!isAuthorized()}/>
        </Switch>
        <Footer/>
      </Router>
      )
}
