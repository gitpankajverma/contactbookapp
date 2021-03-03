import React from "react";
import { ADD_CONTACT } from "../constants";
import { EDIT_CONTACT } from "../constants";
import { DEL_CONTACT } from "../constants";
const iState = {
  contacts: [],
};
const contactreducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };

    case EDIT_CONTACT:
      return { contacts: action.payload };

    case DEL_CONTACT:
      return { contacts: action.payload };

    default:
      return state;
  }
};
export default contactreducer;
