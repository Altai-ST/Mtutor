import { SAVE_TOKENS, SET_FORM, SET_ROLES, SAVE_USER, SET_QUALIFICATION } from "../actionType";

export const FormSet = (val)=>({
    type: SET_FORM,
    payload: val
})

export const SetRole = (val)=>({
    type: SET_ROLES,
    payload:val
})

export const saveToken = (val) =>({
    type: SAVE_TOKENS,
    payload: val,
})

export const saveUser =(user)=>({
    type:SAVE_USER,
    payload:user
})

export const setQual = (data)=>({
    type: SET_QUALIFICATION,
    payload: data
})

