import { ADD_CONTACT } from "../constants";
const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};
export default addContact;
