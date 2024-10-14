// components/ItemForm.js
import React, { useState } from 'react';

const ItemForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="description" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
