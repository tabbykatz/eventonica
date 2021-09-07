import * as React from "react";

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.email} - id:{user.id}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
