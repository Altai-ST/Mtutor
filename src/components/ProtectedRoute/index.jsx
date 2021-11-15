import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export const ProtectedRoute=({isAuthorized, ...rest})=>{
  const state = useSelector(state=>state.userRedusers.qual)
    if(isAuthorized){
        return <Route {...rest}/>
      }
    const currentRole = rest.role ? rest.role : null
    if((state && currentRole === 5) || (currentRole === 10)){
      return <Redirect to='/home'/>
    }else{
      return <Redirect to='/tutorQual'/>
    }
    
}