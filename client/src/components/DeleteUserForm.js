import * as React from "react";

const DeleteUserForm = ({ deleteUser }) => {
  const [userID, setUserID] = React.useState("");

  const handleChange = (e) => {
    setUserID(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteUser(userID);
    setUserID("");
  };

  return (
    <form id="delete-user" onSubmit={onSubmit}>
      <fieldset>
        <label>User ID</label>
        <input
          type="text"
          id="delete-user-id"
          onChange={(e) => handleChange(e)}
          value={userID}
        />
      </fieldset>
      <input type="submit" value="Delete" />
    </form>
  );
};
export default DeleteUserForm;
