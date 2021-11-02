import React from "react";
import { Redirect, Route } from "react-router";
import Catalog from "../../container/Catalog";


export const ProtectedRoute=({isAuthorized, allowedRole, currentRole, ...rest})=>{
  console.log(isAuthorized)
    if(!isAuthorized){
        return <Route {...rest}/>
      }    
    return  <Route {...rest}/>
}