import * as React from "react";

const initialState = {
  name: "",
  email: "",
  id: "",
};

const AddUserForm = ({ addUser }) => {
  const [formData, setFormData] = React.useState(initialState);

  const updateField = (field, value) =>
    setFormData((formData) => ({ ...formData, [field]: value }));

  const resetForm = () => setFormData(initialState);

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
