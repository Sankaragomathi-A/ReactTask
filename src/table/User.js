import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";
import TableHeader from "./TableHeader";

const User = ({ user }) => {
  // const [click, setClick] = useState(false);

  const { dispatchUSerEvent } = useContext(AppContext);

  const handleRemoveUser = () => {
    dispatchUSerEvent("REMOVE_USER", { userId: user.id });
  };

  return (
    <div className="tableTr">
      <table id="">
        <tr className="">
          <td >{user.name}</td>
          <td>{user.password}</td>
          <td>Active</td>
          <td>Admin</td>
          <td className="action">
                <div className="row">
                    <div className="col">
                    <span> <button className="btn btn-primary">Details</button></span>
           
                    </div>
                    <div className="col">
                    <span> <button className="btn btn-danger" onClick={handleRemoveUser}>Delete</button></span>
              
                    </div>
                </div>
                 
         
          </td>
        </tr>
      </table>
    </div>
  );
};
export default User;
