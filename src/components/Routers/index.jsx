import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "../Footer/Footer";
import FindTutor from "../ForStudent/FindTutor/FindTutor";
import Home from "../ForStudent/Home";
import HeaderForStudent from "../Headers/HeaderForStudent";

export function Routers() {
  return (
    <Router>
      <HeaderForStudent />
      <Switch>
        <Route exact path='/' component={Home}>
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