import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/itemSlice';
import ItemForm from './ItemForm';
import Home from './Home';

const AddItem = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(addItem(formData));
  };

  return (
    <div>
      <h1>Add Item</h1>
      <ItemForm onSubmit={handleSubmit} />
      <Home />
    </div>
  );
};

export default AddItem;
