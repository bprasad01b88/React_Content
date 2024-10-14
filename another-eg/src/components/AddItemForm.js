// AddItemForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/dataSlice';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addItem({ name }));
    setName('');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItemForm;
