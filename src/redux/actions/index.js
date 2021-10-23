import { SETFORM, SETPASSWORD } from "../actionType";

export const FormSet = (val)=>({
    type: SETFORM,
    payload: val
})

export const SetPassword = (val)=>({
    type: SETPASSWORD,
    payload: val
})