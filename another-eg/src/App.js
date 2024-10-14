// App.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openDatabase, getAllItemsFromDB, addItemToDB, editItemInDB, deleteItemFromDB   } from './db/db';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import EditItemForm from './components/EditItemForm';
import useOnlineStatus from './hooks/useOnlineStatus';
import Invoice from './components/Invoice';
import CollapsedTable from './components/CollapsedTable';

const App = () => {

  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const online = useOnlineStatus();

  useEffect(() => {
    openDatabase()
      .then(() => {
        console.log('Database opened successfully');
        if (online) {
          syncDataWithServer();
        } else {
          loadItemsFromDB();
        }
      })
      .catch(error => {
        console.error('Error opening database:', error);
      });
  }, [online]);

  const loadItemsFromDB = async () => {
    try {
      const itemsFromDB = await getAllItemsFromDB();
      setItems(itemsFromDB);
    } catch (error) {
      console.error('Error loading items from DB:', error);
    }
  };

  const syncDataWithServer = async () => {
    // Fetch items from server and update local state
    try {
      const response = await fetch('your-server-endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data from server');
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error syncing data with server:', error);
    }
  };

  const handleAddItem = async newItem => {
    if (online) {
      // Add item to server and update local state
      try {
        const response = await fetch('your-server-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });
        if (!response.ok) {
          throw new Error('Failed to add item to server');
        }
        const addedItem = await response.json();
        setItems(prevItems => [...prevItems, addedItem]);
      } catch (error) {
        console.error('Error adding item to server:', error);
      }
    } else {
      // Add item to local database
      try {
        await addItemToDB(newItem);
        setItems(prevItems => [...prevItems, newItem]);
      } catch (error) {
        console.error('Error adding item to local DB:', error);
      }
    }
  };

  const handleEditItem = async (id, updatedItem) => {
    if (online) {
      // Update item on server and update local state
      try {
        const response = await fetch(`your-server-endpoint/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedItem),
        });
        if (!response.ok) {
          throw new Error('Failed to update item on server');
        }
        const updatedItemFromServer = await response.json();
        setItems(prevItems => prevItems.map(item => (item.id === id ? updatedItemFromServer : item)));
        setEditingItem(null);
      } catch (error) {
        console.error('Error updating item on server:', error);
      }
    } else {
      // Update item in local database
      try {
        await editItemInDB(id, updatedItem);
        setItems(prevItems => prevItems.map(item => (item.id === id ? updatedItem : item)));
        setEditingItem(null);
      } catch (error) {
        console.error('Error updating item in local DB:', error);
      }
    }
  };

  // const handleDeleteItem = async id => {
  //   if (online) {
  //     // Delete item from server and update local state
  //     try {
  //       const response = await fetch(`your-server-endpoint/${id}`, {
  //         method: 'DELETE',
  //       });
  //       if (!response.ok) {
  //         throw new Error('Failed to delete item from server');
  //       }
  //       setItems(prevItems => prevItems.filter(item => item.id !== id));
  //     } catch (error) {
  //       console.error('Error deleting item from server:', error);
  //     }
  //   } else {
  //     // Delete item from local database
  //     try {
  //       await deleteItemFromDB(id);
  //       setItems(prevItems => prevItems.filter(item => item.id !== id));
  //     } catch (error) {
  //       console.error('Error deleting item from local DB:', error);
  //     }
  //   }
  // };

  return (
    <div>
      {/* <h1>CRUD App with Offline Storage</h1>
      <p>{online ? 'Online' : 'Offline'}</p>
      {!online && <p>You are currently offline. Changes will be synced when you go online.</p>}
      <AddItemForm online={online} onAddItem={handleAddItem} />
      <ItemList />
      {editingItem && (
        <EditItemForm
          item={items.find(item => item.id === editingItem)}
          onEditItem={handleEditItem}
          setEditingItem={setEditingItem}
        />
      )} */}
      {/* <Invoice /> */}
      <CollapsedTable />
    </div>
  );
};

export default App;
