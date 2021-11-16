import { applyMiddleware, createStore } from "redux";
import { Autorization } from "./reducers";
import { userRedusers } from "./reduserUser";
import { combineReducers } from "redux";
import { rootReducer } from "./reducers/adminReducer";
import {applicationReducers} from "./reducers/tutorRedusers";
import thunk from 'redux-thunk'
const createRootReducer = combineReducers({
    Autorization,
    userRedusers,
    rootReducer,
    applicationReducers
})

export const store = createStore(createRootReducer, applyMiddleware(thunk))