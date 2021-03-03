import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import addContact from "../actions/AddAction";
import Navbar from "./Navbar";
import swal from "sweetalert";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function submitData(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && phoneNo !== "") {
      if (phoneNo.length >= 10) {
        dispatch(
          addContact({
            id: shortid.generate(),
            username: name,
            usermail: email,
            userphoneNo: phoneNo,
          })
        );
        swal("Great", "New Contact added", "success").then((res) => {
          history.push("/");
        });
      } else {
        swal("Contact number must be atleast 10 digits long");
      }
    } else {
      swal("Oops", "Please fill all the required fields", "error");
    }
  }

  return (
    <>
      <Navbar />
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="Your Good Name "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Email Id "
          value={email}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Contact Number "
          value={phoneNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
        />
        <br />
        <button className="addBtn" type="submit">
          ADD
        </button>
      </form>
    </>
  );
};
export default AddContact;
