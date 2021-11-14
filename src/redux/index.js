import { createStore } from "redux";
import { Autorization } from "./reducers";
import { userRedusers } from "./reduserUser";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { applicationReducers } from "./reducers";


const createRootReducer = combineReducers({
    Autorization,
    userRedusers,
    applicationReducers,
   
   
})

export const store = createStore(createRootReducer, applyMiddleware(thunk))