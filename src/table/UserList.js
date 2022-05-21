import react, { useContext } from "react";
import User from "./User";
import { AppContext } from "../context/context";

function UserList() {
  const { users } = useContext(AppContext);
  return (
    <div>

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
export default UserList;
