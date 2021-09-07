import * as React from "react";
import UsersList from "./UsersList";
import AddUserForm from "./AddUserForm";
import DeleteUserForm from "./DeleteUserForm";

const calcifer = { name: "Calcifer", email: "firespirit@gmail.com", id: "1" };
const jiji = { name: "Jiji", email: "Jiji@gmail.com", id: "2" };
const turniphead = {
  name: "Turnip Head",
  email: "cursedprince69@gmail.com",
  id: "3",
};

const Users = (props) => {
  const [users, setUsers] = React.useState([calcifer, jiji, turniphead]);

  const addUser = (formData) => {
    setUsers([...users, formData]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <section className="user-management">
      <h2>User Management</h2>
      <UsersList users={users} />

      <div>
        <h3>Add User</h3>
        <AddUserForm addUser={addUser} />
      </div>

      <div>
        <h3>Delete User</h3>
        <DeleteUserForm deleteUser={deleteUser} />
      </div>
    </section>
  );
};
export default Users;
