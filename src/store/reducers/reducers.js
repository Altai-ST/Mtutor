import { ROLE, Role } from "../actions/action";

let initialState = {
    ChangeTheme: 0,
    Role: {
        Admin: 1,
        Tutor: 5,
        Student: 10
    }
}

const MtutorApp = (state = initialState, action) => {
    switch (action.type) {
        case ROLE:
            return {
                ...state, Admin: action.color, title: action.title
            } 
    }
}

export default MtutorApp