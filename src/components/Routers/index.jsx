import React from  'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from '../Admin';
import Add from '../Admin/Coureses/Add/index'
import Edit from '../Admin/Coureses/Edit';
import Courses from '../Admin/Coureses';


export function Routers() {
  return (
      <Router>
        <Switch>
          <Route path='/chooseRole'>
            
          </Route>
          <Route path='/register'>
            
          </Route>
          <Route path='/password'>
            
          </Route>
          <Route path='/Login'>
            
          </Route>
          <Route path='/admin/courses/add' component={Add}/>
          <Route path='/admin/courses/edit' component={Edit}/>
          <Route path='/admin/courses' component={Courses}/>
          {/* <Route path='/admin/courses' component={Admin}/> */}
        </Switch>
      </Router>
  );
}