import * as React from "react";

const initialState = {
  name: "",
  email: "",
  id: "",
};

const reducer = (formData, action) => {
  switch (action.type) {
    case "add":
      return {
        ...formData,
        [action.field]: action.payload,
      };
    case "wipe":
      return {
        ...initialState,
      };
    default:
      throw new Error();
  }
};

const AddUserForm = ({ addUser }) => {
  const [formData, addFormData] = React.useReducer(reducer, initialState);

  const handleChange = (e) => {
    addFormData({
      type: "add",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    addFormData({ type: "wipe" });
  };
  return (
    <form id="add-user" onSubmit={onSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          required
          name="name"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          value={formData.name}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          value={formData.email}
        />
        <label>ID</label>
        <input
          type="text"
          name="id"
          required
          placeholder="choose a numerical id"
          onChange={(e) => handleChange(e)}
          value={formData.id}
        />
      </fieldset>

      <input type="submit" value="Add" />
    </form>
  );
};

export default AddUserForm;
