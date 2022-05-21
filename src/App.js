import React, { useState } from "react";
import Table from "./table/Table";
import { AppContext } from "./context/context";
import UserList from "./table/UserList";
import Modal from "./table/Modal";
import User from "./table/User";
import TableHeader from "./table/TableHeader";

function App() {
  const userList = [
    {
      id: 1,
      name: "nithya",
      password: 123,
    },
  ];

  const [users, setUser] = useState(userList);

  const dispatchUSerEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USERS":
        // const userData = userList.find((user) => user.name === name.value);

        setUser([...users, payload.newUser]);
        return;
      case "REMOVE_USER":
        setUser(users.filter((user) => user.id !== payload.userId));
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <AppContext.Provider value={{ users, dispatchUSerEvent }}>
        <TableHeader></TableHeader>
        <UserList></UserList>
        <Table></Table>
        
      </AppContext.Provider>
    </div>
  );
}
export default App;
