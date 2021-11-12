import { SET_FORM, SET_ROLES } from "../actionType";

const initialState={
    formEmail:{
        email:'',
        password:'',
        role:'',
        phone:'',
        fullName:'',
    },
    singInForm:{
        email:'',
        password:''
    }
}

export const Autorization =(state = initialState, action)=>{
    switch (action.type) {
        case SET_FORM:
            console.log(action.payload)
            return{
                ...state,
                formEmail:{
                    ...state.formEmail,
                    email:action.payload.email,
                    phone:action.payload.phone,
                    fullName:action.payload.fullName,
                }
            }
        case SET_ROLES:
            console.log(action.payload)
            return{
                ...state,
                formEmail:{
                    ...state.formEmail,
                    role:action.payload,
                }
            }
        default: return state
    }
}