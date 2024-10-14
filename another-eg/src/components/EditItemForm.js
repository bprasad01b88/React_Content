// EditItemForm.js
import React, { useState } from 'react';

const EditItemForm = ({ item, onEdit }) => {
  const [name, setName] = useState(item.name);

  const handleSubmit = e => {
    e.preventDefault();
    onEdit(item.id, { ...item, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditItemForm;
