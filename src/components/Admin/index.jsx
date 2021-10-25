import React from "react"
import Courses from "./Coureses"
import { Add } from "./Coureses/Add"
import { BrowserRouter, Route } from 'react-router-dom'

 const Admin = () => {

    return(
        <BrowserRouter>
          <div>
        <Courses/>
        <Route path='/add' component={Add}/>
     </div>
        </BrowserRouter> 
    )
 
}
export default Admin