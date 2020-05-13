import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./rootreducer";
import logger from "redux-logger";

const initialState = {}

const middleware = [thunk, logger]

const store = createStore(
    rootreducer, 
    initialState,
    compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store;