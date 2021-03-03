import { createStore, combineReducers } from "redux";
import contactreducer from "./reducers/ContactReducer";
const rootreducer = combineReducers({ allContacts: contactreducer });
const myStore = createStore(rootreducer);
export default myStore;
