import { SUBMIT_FORM_DATA } from "../actions/types";

const initialState = {
    data: [],
}

const formDataReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SUBMIT_FORM_DATA:
            return { ...state, data: [...state.data, payload] };
        default:
            return state;
    }
}

export default formDataReducer;