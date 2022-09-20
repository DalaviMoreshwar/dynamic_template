import { combineReducers } from "redux";
import { withReduxStateSync } from "redux-state-sync";
import formDataReducer from "./submit.reducer";

const rootReducer = combineReducers({
    formDataReducer
});

export default withReduxStateSync(rootReducer);