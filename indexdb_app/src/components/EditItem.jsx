import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemForm from './DataForm';
import { editItem } from '../redux/itemSlice';

const EditItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(editItem(id, formData));
  };

  return (
    <div>
      <h1>Edit Item</h1>
      <ItemForm onSubmit={handleSubmit} />
    </div>
  );
};

export default EditItem;
