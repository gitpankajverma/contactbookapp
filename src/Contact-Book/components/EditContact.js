import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import editContact from "../actions/EditAction";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import swal from "sweetalert";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const data = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const record = data.allContacts.contacts.filter((value) => {
      return value.id === id;
    });
    if (record[0]) {
      setName(record[0].username);
      setMail(record[0].usermail);
      setPhoneNo(record[0].userphoneNo);
    }
  }, []);

  function updateData(e) {
    e.preventDefault();
    if (name !== "" && email !== "" && phoneNo !== "") {
      const newContactArr = data.allContacts.contacts.map((obj) => {
        if (obj.id === id) {
          return {
            id: obj.id,
            username: name,
            usermail: email,
            userphoneNo: phoneNo,
          };
        } else return obj;
      });
      dispatch(editContact(newContactArr));
      swal("Great", " Contact Edited", "success").then((res) => {
        history.push("/");
      });
    } else {
      swal("Oops", "Please fill all the required fields", "error");
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={updateData}>
        <input
          type="text"
          placeholder="Your Good Name "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email Id "
          value={email}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Contact Number "
          value={phoneNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
        />
        <button type="submit" className="updateBtn">
          Update
        </button>
      </form>
    </>
  );
};
export default EditContact;
