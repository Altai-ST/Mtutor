import { SETCOURSE,SET_ALL_COURSES ,SET_EDIT, DELETE_COURSE} from "../actionsTypes";

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