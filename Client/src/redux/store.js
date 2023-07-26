import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

//Store terminado.
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
