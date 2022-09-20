import { SUBMIT_FORM_DATA } from "./types";

export const _submitData = (data) => dispatch => {
    dispatch({ type: SUBMIT_FORM_DATA, payload: data })
}