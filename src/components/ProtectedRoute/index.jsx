import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export const ProtectedRoute=({isAuthorized, ...rest})=>{
  const user = useSelector(state=>state.userRedusers.user)
    if(isAuthorized){
        return <Route {...rest}/>
      }
    const currentRole = user !== '' ? user.role.role : null
    const currentStatus = user !== '' ? user.status : null
    if((currentStatus === 'confirmed' && currentRole === 5) || (currentRole === 10) ||(currentRole === 1)){
      return <Redirect to='/home'/>
    }else if((currentStatus === 'waiting' || currentStatus === 'pending') && currentRole === 5){
      return <Redirect to='/tutorQual'/>
    }else if(currentStatus === 'rejected' && currentRole === 5){
      return <Redirect to='/tutorQual'/>
    }
    
}