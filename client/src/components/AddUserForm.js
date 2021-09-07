import * as React from "react";

const initialState = {
  name: "",
  email: "",
  id: "",
};

const reducer = (formData, action) => {
  switch (action.type) {
    case "update":
      return {
        ...formData,
        [action.field]: action.payload,
      };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

const AddUserForm = ({ addUser }) => {
  const [formData, dispatch] = React.useReducer(reducer, initialState);

  const updateField = (field, payload) =>
    dispatch({ type: "update", field, payload });

  const resetForm = () => dispatch({ type: "reset" });

  const onChange = ({ currentTarget: { name, value } }) => {
    updateField(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    resetForm();
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
          {...{ onChange }}
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
          {...{ onChange }}
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
          {...{ onChange }}
          value={formData.id}
        />
      </label>

      <button>Add</button>
    </form>
  );
};

export default AddUserForm;
