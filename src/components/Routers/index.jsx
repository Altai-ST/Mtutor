import React from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../ForStudent/Home";
import Head from '../Header/Headers'
import HeaderForAdmin from "../Headers/HeaderForAdmin";
import HeaderForStudent from "../Headers/HeaderForStudent";
import Header from '../Headers/HeaderForStudent'
import HeaderForTutor from "../Headers/HeaderForTutor";

export function Routers() {
    return (
        <Router>
          <Switch>
            <HeaderForStudent/>
            {/* <HeaderForTutor/> */}
            {/* <HeaderForAdmin/> */}
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/register'>
              
            </Route>
            <Route path='/password'>
              
            </Route>
            <Route path='/Login'>
              
            </Route>
            <Route path='/'>
              
            </Route>
            <Footer/>
          </Switch>
        </Router>
    );
  }