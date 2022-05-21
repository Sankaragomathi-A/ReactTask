import React,{useState,useContext} from "react";
import '../table/Table.css'
import Popup from "./Popup";
import { AppContext } from '../context/context'

function Modal({setOpenModal}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { dispatchUSerEvent } = useContext(AppContext);

  const handleClick = () => {
    const user = { id: Math.random(), name, password };
    dispatchUSerEvent("ADD_USERS", { newUser: user });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
  };
  return (
    
    <div className="w-60 m-auto">
       <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
    <div className="container bg-light p-2 w-60 m-auto">
      <h3>Create New User</h3>
      <hr></hr>
      <form onSubmit={onSubmit}>
        <label>Login</label>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        <div className="row">
          <div className="col">
            <label>Role</label>
            <select>
              <option value="0">Admin</option>
              <option value="1">Client</option>
            </select>
          </div>

          <div className="col">
            <label>Status</label>
            <select>
              <option value="0">Active</option>
              <option value="1">Logout</option>
              <option value="2">Disabled</option>
            </select>
          </div>
        </div>
         <div className="row">
         <div className="col">
         <label>Password</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}></input>
         </div>
         <div className="col">
           <label>confirm Password</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)} ></input>
          </div>
         </div>
         <div>
           <label>Data(json)</label>
           <textarea rows="4" cols="50"></textarea>
        </div>
         <div>
         <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
      <button onClick={handleClick}>Save</button>
      </div>

      </form>
    </div>
   
    </div>
  
   
  );
}
export default Modal;
