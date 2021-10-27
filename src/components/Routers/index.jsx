import React from  'react';
import Register from "../Register/register";
import Catalog from "../Catalog/index";
import PutPassword from "../PostPassword";
import Footer from "../Footer/Footer";
import FindTutor from "../ForStudent/FindTutor/FindTutor";
import Home from "../ForStudent/Home";
import Head from '../Header/Headers'
import HeaderForTutor from '../../components/ForTutor/HeaderForTutor'
import HeaderForAdmin from "../ForAdmin/HeaderForAdmin";
import HeaderForStudent from "../ForStudent/HeaderStudent";
import Main from '../Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginContent } from '../LoginContent';

export function Routers() {
  return (
      <Router>
        <Head />
        <Switch>
        <Route exact path='/' >
          <Main/>
        </Route>
        <Route path='/tutor'>
          <HeaderForTutor />
        </Route>
        <Route path='/admin'>
          <HeaderForAdmin />
        </Route>
        <Route path='/student'>
          <HeaderForStudent />
        </Route>
        <Route path='/home' component={Home}>
        </Route>
        <Route path='/findTutor' component={FindTutor}>
        </Route>
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
        <Footer/>
      </Router>
      )
}
