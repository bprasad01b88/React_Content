import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, setItems } from '../redux/itemSlice';
import db from '../db/db';
const ItemLists = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);
  
    const removeItemHandler = (id) => {
      dispatch(removeItem(id));
      if (navigator.onLine) {
        // Logic to delete item from server can be implemented here
        // For simplicity, let's just delete it from IndexDB for now
        db.items.delete(id);
      }
    };
  
    useEffect(() => {
      const loadItemsFromIndexDB = async () => {
        try {
          const storedItems = await db.items.toArray();
          dispatch(setItems(storedItems));
        } catch (error) {
          console.error('Error loading items from IndexDB:', error);
        }
      };
  
      loadItemsFromIndexDB();
    }, [dispatch]);
  
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItemHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
}

export default ItemLists