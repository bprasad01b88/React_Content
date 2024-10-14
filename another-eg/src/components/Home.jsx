// components/Home.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editItem } from '../redux/reducer/itemSlice';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemData, setEditedItemData] = useState({ name: '', description: '' });

//   useEffect(() => {
//     dispatch(fetchItems());
//   }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (id, name, description) => {
    setEditingItemId(id);
    setEditedItemData({ name, description });
  };

  const handleSaveEdit = () => {
    dispatch(editItem(editingItemId, editedItemData));
    setEditingItemId(null);
    setEditedItemData({ name: '', description: '' });
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItemData({ name: '', description: '' });
  };

  const handleChange = (e) => {
    setEditedItemData({ ...editedItemData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <>
                <input type="text" name="name" value={editedItemData.name} onChange={handleChange} />
                <input type="text" name="description" value={editedItemData.description} onChange={handleChange} />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {item.name} - {item.description}
                <button onClick={() => handleEdit(item.id, item.name, item.description)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
