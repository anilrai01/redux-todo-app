import DataActionType from "./DataActionType";

const animateType = ["appear", "fade"];

const initialState = {
    editStatus: false,
    animate : animateType[1]
}

const PreEditReducer = (state = initialState, action) => {
    switch(action.type){
        case DataActionType.PRE_EDIT_DATA:
            return {
                ...state,
                editStatus: !state.editStatus,
                animate: state.animate === animateType[0] ? animateType[1] : animateType[0]
            }

        default:
            return {
                ...state
            }
    }
}

export default PreEditReducer;