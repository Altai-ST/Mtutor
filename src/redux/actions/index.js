import { SAVETOKENS, SETFORM, SETSINGIN, SETROLES, SET_APPLICATION } from "../actionType";

export const FormSet = (val)=>({
    type: SETFORM,
    payload: val
})

export const SetRole = (val)=>({
    type: SETROLES,
    payload:val
})

export const saveToken = (val) =>({
    type: SAVETOKENS,
    payload: val,
})


export const signInForm=(val)=>({
    type:SETSINGIN,
    payload: val
})

export const setApplication = (data)=> ({
    type: SET_APPLICATION,
    payload: data
})

