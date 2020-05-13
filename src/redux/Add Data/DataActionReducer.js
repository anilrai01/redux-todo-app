import DataActionType from "./DataActionType";

let taskId = 1;

const InitialData = [{
    id: taskId,
    title: "Test",
    body: "Task Test",
    status: "Incomplete"
}]

const DataActionReducer = (state = InitialData, action) => {
    switch(action.type){
        case DataActionType.ADD_DATA:
            return [
                ...state,
                {
                    id : taskId+=1,
                    title: action.payload.title,
                    body: action.payload.body,
                    status: action.payload.status
                }
            ]
        case DataActionType.EDIT_DATA:
            return state.map(el => (
                el.id === action.payload.id ? 
                el.title = action.payload.title ?
                el.body: action.payload.payload.body ?
                el.status : action.payload.status : el
            ))
        default:
            return state;  
    }
}

export default DataActionReducer;