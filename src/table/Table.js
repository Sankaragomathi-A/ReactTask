import React, { useState,useContext } from "react";

import "../table/Table.css";
import Modal from "./Modal";
import User from "./User";


function Table(Props) {
  // const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);



 
  return(
    <div>
    
    <button id="loginScreen" className="btn btn-success add-user"   onClick={() => {
          setModalOpen(true);
        }}>
    {" "}
    Add new user
  </button>
  {modalOpen && <Modal setOpenModal={setModalOpen} />}
  
  
  </div>
  )

 
 
    
}
export default Table





 