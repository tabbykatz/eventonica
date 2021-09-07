import * as React from "react";

const AddUserForm = ({ addUser }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;

    const {
      name: { value: name },
      email: { value: email },
      id: { value: id },
    } = form.elements;

    e.preventDefault();
    addUser({ name, email, id });
    form.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" required name="name" placeholder="Name" />
      </label>

      <label>
        Email
        <input type="email" name="email" required placeholder="Email" />
      </label>

      <label>
        ID
        <input
          type="text"
          name="id"
          required
          placeholder="choose a numerical id"
        />
      </label>

      <button>Add</button>
    </form>
  );
};

export default AddUserForm;
