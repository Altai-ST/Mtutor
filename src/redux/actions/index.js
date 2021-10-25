import { SETFORM, SETPASSWORD, SETROLES } from "../actionType";

export const FormSet = (val)=>({
    type: SETFORM,
    payload: val
})

export const SetPassword = (val)=>({
    type: SETPASSWORD,
    payload: val
})

export const SetRole = (val)=>({
    type: SETROLES,
    payload:val
})