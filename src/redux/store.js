import { createStore } from "redux"
import eventReducer from "./Events/eventReducer"

const store = createStore(eventReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

/*
This file doesn't need touched
*/
