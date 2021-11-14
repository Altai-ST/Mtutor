import { SAVE_TOKENS, SET_FORM, SET_ROLES, SAVE_USER, SET_QUALIFICATION, SETCOURSE,SET_ALL_COURSES ,SET_EDIT, DELETE_COURSE, SAVE_TUTOR_COURSES, LOCAL_SAVE_TUTOR_COURSES } from "../actionType";

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

export const setCourses = (data)=> ({
    type: SETCOURSE,
    payload: data
})

export const setAllCourses = (data)=> ({
    type: SET_ALL_COURSES,
    payload: data
})
export const setEditId = (data)=> ({
    type: SET_EDIT,
    payload: data
})
export const deleteCourse = (id)=> ({
    type: DELETE_COURSE,
    payload: id
})

export const saveTutorCourses =(value)=>({
    type: SAVE_TUTOR_COURSES,
    payload: value
})

export const localSaveTutorCourse =(value)=>({
    type:LOCAL_SAVE_TUTOR_COURSES,
    payload: value
})