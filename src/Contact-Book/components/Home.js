import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactEntry from "./ContactEntry";
import deleteContact from "../actions/DeleteAction";
import swal from "sweetalert";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();

  const ContactArr = useSelector((state) => {
    return state.allContacts.contacts;
  });

  const deleteEntry = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure to delete",
      icon: "warning",
      buttons: true,
    }).then((res) => {
      if (res) {
        const newContactArr = ContactArr.filter((obj) => {
          return obj.id !== id;
        });
        dispatch(deleteContact(newContactArr));
      }
    });
  };

  const deleteAll = () => {
    if (ContactArr.length > 0) {
      swal({
        title: "Warning",
        text: "Are you sure to delete entire Contact list?",
        icon: "warning",
        buttons: true,
      }).then((res) => {
        if (res) {
          dispatch(deleteContact([]));
        }
      });
    }
  };

  return (
    <div>
      <Navbar deleteAll={deleteAll} />
      <table className="contactTable">
        <thead>
          <th>Name</th>
          <th>E-Mail</th>
          <th>Contact-No</th>
          <th>Action</th>
        </thead>
        <tbody>
          {ContactArr &&
            ContactArr.map((value) => {
              return (
                <ContactEntry
                  key={value.id}
                  contactInfo={value}
                  deleteEntry={deleteEntry}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
