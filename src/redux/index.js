import { createStore } from "redux";
import { Autorization } from "./reducers";
import { userRedusers } from "./reduserUser";
import { combineReducers } from "redux";

const createRootReducer = combineReducers({
    Autorization,
    userRedusers,
})

export const store = createStore(createRootReducer)