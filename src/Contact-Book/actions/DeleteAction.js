import { DEL_CONTACT } from "../constants";
const deleteContact = (newContactArr) => {
  return {
    type: DEL_CONTACT,
    payload: newContactArr,
  };
};
export default deleteContact;
