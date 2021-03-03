import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";

const ContactEntry = (props) => {
  const data = props.contactInfo;

  return (
    <tr>
      <td data-label="Name">{data.username}</td>

      <td data-label="E-Mail">{data.usermail}</td>

      <td data-label="Contact-No">{data.userphoneNo}</td>

      <td data-label="Action">
        <NavLink to={`/contact/edit/${data.id}`}>
          <Tooltip title="Edit Contact">
            <EditIcon style={{ height: "20px" }} />
          </Tooltip>
        </NavLink>

        <Tooltip title="Delete Contact">
          <DeleteForeverSharpIcon
            style={{ height: "20px" }}
            onClick={() => {
              props.deleteEntry(data.id);
            }}
          />
        </Tooltip>
      </td>
    </tr>
  );
};
export default ContactEntry;
