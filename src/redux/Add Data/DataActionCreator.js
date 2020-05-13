import DataActionType from "./DataActionType";

const AddData = (data) => {
    return {
        type : DataActionType.ADD_DATA,
        payload : data
    }
}

const EditData = (data) => {
    return {
        type: DataActionType.EDIT_DATA,
        payload : data
    }
}

const PreEditData = () => {
    return {
        type: DataActionType.PRE_EDIT_DATA,
    }
}

export { AddData, EditData, PreEditData }