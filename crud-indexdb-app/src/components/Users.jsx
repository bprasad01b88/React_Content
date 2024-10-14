import React, { useEffect, useState } from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Users = () => {
    const [data, setData] = useState([]);
    // const [mode, setMode] = useState('online'); 
    
    useEffect(() => {
        const fetchData = async () => {
            let db;
            try {
                const dbOpenRequest = window.indexedDB.open('myDatabase', 1);

                dbOpenRequest.onerror = function(event) {
                    console.error('IndexedDB error:', event.target.errorCode);
                };

                dbOpenRequest.onsuccess = function(event) {
                    db = event.target.result;
                    fetchDataFromAPI(db);
                };

                dbOpenRequest.onupgradeneeded = function(event) {
                    db = event.target.result;
                    const objectStore = db.createObjectStore('users', { keyPath: 'id' });
                    objectStore.createIndex('name', 'name', { unique: false });
                    objectStore.createIndex('email', 'email', { unique: true });
                };
            } catch (error) {
                console.error('IndexedDB error:', error);
                // setMode('offline');
                fetchDataFromIndexedDB();
            }
        };

        const fetchDataFromAPI = async (db) => {
            const url = "https://jsonplaceholder.typicode.com/users";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
                saveDataToIndexedDB(db, jsonData);
            } catch (error) {
                console.error('Fetch error:', error);
                // setMode('offline');
                fetchDataFromIndexedDB(db);
            }
        };

        const saveDataToIndexedDB = (db, data) => {
            const transaction = db.transaction(['users'], 'readwrite');
            const objectStore = transaction.objectStore('users');
            data.forEach(item => {
                objectStore.put(item);
            });
        };

        const fetchDataFromIndexedDB = (db) => {
            const transaction = db.transaction(['users'], 'readonly');
            const objectStore = transaction.objectStore('users');
            const getDataRequest = objectStore.getAll();
            getDataRequest.onsuccess = function(event) {
                setData(event.target.result);
            };
        };

        fetchData();
    }, []);

    const online = useOnlineStatus();
    return (
        <div>
            <div>
                {
                    !online &&
                        <div className="alert alert-warning" role="alert">
                            You are in offline mode or there is an issue with the connection.
                        </div>
                }
            </div>
            <div className="mt-2 mb-2">Users Data From Fake API</div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
