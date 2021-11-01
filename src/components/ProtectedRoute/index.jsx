import React from "react";
import { Redirect, Route } from "react-router";
import Catalog from "../Catalog";


export const ProtectedRoute=({isAuthorized, allowedRole, currentRole, ...rest})=>{
  console.log(isAuthorized)
    if(!isAuthorized){
        return <Route {...rest}/>
      }
    
      if(currentRole !== allowedRole) {
      return <Redirect to="/login"/>
      }
    
      return  <Route {...rest}/>
}