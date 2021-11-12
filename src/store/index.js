import { applyMiddleware, createStore } from "redux";
import { Autorization } from "./reducers";
import { userRedusers } from "./reduserUser";
import { combineReducers } from "redux";
import thunk from 'redux-thunk'
const createRootReducer = combineReducers({
    Autorization,
    userRedusers,
})

export const store = createStore(createRootReducer, applyMiddleware(thunk))