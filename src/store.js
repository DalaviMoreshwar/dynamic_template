import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
} from "redux-state-sync";

const config = {};

const middleware = [thunk, createStateSyncMiddleware(config)];

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);


initStateWithPrevTab(store);

export default store;