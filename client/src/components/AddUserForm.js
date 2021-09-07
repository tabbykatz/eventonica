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
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          type="text"
          required
          name="name"
          placeholder="Name"
          onChange={(e) => handleChange(e)}
          value={formData.name}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          value={formData.email}
        />
      </label>

      <label>
        ID
        <input
          type="text"
          name="id"
          required
          placeholder="choose a numerical id"
          onChange={(e) => handleChange(e)}
          value={formData.id}
        />
      </label>

      <button>Add</button>
    </form>
  );
};

export default AddUserForm;
