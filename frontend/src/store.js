import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { userLoginReducer } from "./Reducers/UserReducers";


const reducer = combineReducers({
 userLogin : userLoginReducer,
});

const initialstate = {}

const middleware =[thunk];

const store = createStore(
     reducer,
     initialstate,
     composeWithDevTools(applyMiddleware(...middleware))
)


export default store;