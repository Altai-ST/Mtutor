import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "../Footer/Footer";
import FindTutor from "../ForStudent/FindTutor/FindTutor";
import Home from "../ForStudent/Home";
import Head from '../Header/Headers'
import HeaderForTutor from '../../components/ForTutor/HeaderForTutor'
import HeaderForAdmin from "../ForAdmin/HeaderForAdmin";
import HeaderForStudent from "../ForStudent/HeaderStudent";

export function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <Head />
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
        </Route>
        <Route path='/register' >
        </Route>
        <Route path='/password' >
        </Route>
        <Route path='/login' >
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}