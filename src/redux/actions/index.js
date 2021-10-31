import { SAVETOKENS, SETFORM, SETSINGIN, SETROLES } from "../actionType";

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

