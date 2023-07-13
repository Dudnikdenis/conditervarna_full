import { applyMiddleware, combineReducers, createStore } from "redux";
import assortBlockReducer from './assortBlock-reducer';
import workImgReducer from './workImg-reducer';
import userReducer from './user-reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    assortBlock: assortBlockReducer,
    workImg: workImgReducer,
    users: userReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;