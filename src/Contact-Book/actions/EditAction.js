import { EDIT_CONTACT } from "../constants";
const editContact = (newcontactArr) => {
  return {
    type: EDIT_CONTACT,
    payload: newcontactArr,
  };
};
export default editContact;
