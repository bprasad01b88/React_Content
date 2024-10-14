// components/EditItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/reducer/itemSlice';

const EditItem = ({ id, initialName, initialDescription, onCancel }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const handleSave = () => {
    dispatch(editItem(id, { name, description }));
    onCancel();
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditItem;
