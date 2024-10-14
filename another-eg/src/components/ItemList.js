// ItemList.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditItemForm from './EditItemForm';
import { deleteItem, editItem, fetchItemsFromDB } from '../redux/reducer/dataSlice';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.data.items);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    dispatch(fetchItemsFromDB());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteItem(id));
    // onDeleteItem(id)
  };

  const handleEdit = (id, newData) => {
    dispatch(editItem({ id, newData }));
    setEditingItem(null);
    // setEditingItems(id);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editingItem === item.id ? (
              <EditItemForm item={item} onEdit={handleEdit} />
            ) : (
              <div>
                {item.name}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => setEditingItem(item.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
