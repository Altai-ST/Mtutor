import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from "../Footer/Footer";
import FindTutor from "../ForStudent/FindTutor";
import Home from "../ForStudent/Home";
import Head from '../Header/Headers'
import HeaderForAdmin from "../Headers/HeaderForAdmin";
import HeaderForStudent from "../Headers/HeaderForStudent";
import Header from '../Headers/HeaderForStudent'
import HeaderForTutor from "../Headers/HeaderForTutor";

export function Routers() {
    return (
        <Router>
            <HeaderForStudent/>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/findTutor'>
              <FindTutor/>
            </Route>
            <Route path='/password'>
              
            </Route>
            <Route path='/Login'>
              
            </Route>
            <Route path='/'>
              
            </Route>
          </Switch>
          <Footer/>
        </Router>
    );
  }