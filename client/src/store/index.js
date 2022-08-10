import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { distanceReducer } from "./customReducer";

export const store = createStore(distanceReducer, composeWithDevTools(applyMiddleware(thunk)));
