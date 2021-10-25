import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from "../Footer/Footer";
import FindTutor from "../ForStudent/FindTutor/FindTutor";
import Home from "../ForStudent/Home";
import HeaderForStudent from "../Headers/HeaderForStudent";

export function Routers() {
    return (
        <Router>
            <HeaderForStudent/>
          <Switch>
            <Route exact path='/' component={Home}>
            </Route>
            <Route path='/findTutor' component={FindTutor}>
            </Route>
          </Switch>
          <Footer/>
        </Router>
    );
  }