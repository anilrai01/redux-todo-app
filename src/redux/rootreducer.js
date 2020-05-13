import DataActionReducer from "./Add Data/DataActionReducer"
import PreEditReducer from "./Add Data/PreEditReducer"
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    tasksData: DataActionReducer,
    editStatus: PreEditReducer
})

export default rootreducer;