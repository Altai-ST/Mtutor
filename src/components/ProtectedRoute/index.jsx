import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../ForStudent/Home";

export const ProtectedRoute=({isAuthorized, ...rest})=>{
    if(isAuthorized){
        return <Route {...rest}/>
      }
    return <Redirect to='/home'/>
}