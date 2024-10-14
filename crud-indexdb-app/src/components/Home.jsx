import React, { useState, useEffect } from 'react'
import idb from '../indexedDB/indexeddb';
import {createCollectionInIndexedDB} from '../indexedDB/indexeddb';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Home = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
      })
    
      const [allUsersData, setAllUsersData] = useState([]);
      const [addUser, setAddUser] = useState(false);
      const [editUser, setEditUser] = useState(false);
      const [selectEditUser, setSelectEditUser] = useState({});
    
      const handleChange = (e) => {
        const person = { ...userData, [e.target.name]: e.target.value };
        setUserData(person);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
       const dbPromise = idb.open("test-db", 2);
    
        if (userData.firstName && userData.lastName && userData.email) {
          dbPromise.onsuccess = () => {
            const db = dbPromise.result;
    
            const tx = db.transaction('userData', 'readwrite');
    
            const usersData = tx.objectStore('userData');
    
            if (addUser) {
              const users = usersData.put({
                id: allUsersData.length + 1,
                userData
              });
    
              users.onsuccess = () => {
                tx.oncomplete = () => {
                  db.close();
                };
                getAllData();
                alert('User Added');
              }
    
              users.onerror = (event) => {
                console.log(event);
                alert("Error Occured");
              }
            } else {
              const users = usersData.put({
                id: selectEditUser?.id,
                userData
              });
    
              users.onsuccess = () => {
                tx.oncomplete = () => {
                  db.close();
                };
                getAllData();
                alert('User Update');
              }
    
              users.onerror = (event) => {
                console.log(event);
                alert("Error Occured");
              }
            }
    
          }
        }
      }
    
    
    
      const getAllData = () => {
        const dbPromise = idb.open("test-db", 2);
        dbPromise.onsuccess = () => {
          const db = dbPromise.result;
    
          const tx = db.transaction('userData', 'readonly');
    
          const usersData = tx.objectStore('userData');
    
          const users = usersData.getAll();
    
          users.onsuccess = (query) => {
            setAllUsersData(query.srcElement.result);
          }
    
          users.onerror = (query) => {
            alert("Error Occured While Loading Initial Data");
          }
    
          tx.oncomplete = () => {
            db.close();
          }
        }
      }
    
    let online = useOnlineStatus();
      useEffect(() => {
        createCollectionInIndexedDB();
        getAllData();
         
      }, []);
    
      const deleteUserHandler = (user) => {
        const dbPromise = idb.open("test-db", 2);
        dbPromise.onsuccess = () => {
          const db = dbPromise.result;
    
          const tx = db.transaction('userData', 'readwrite');
    
          const usersData = tx.objectStore('userData');
    
          const deletedUser = usersData.delete(user?.id)
    
          deletedUser.onsuccess = (query) => {
            alert("Deleted User");
            getAllData();
          }
    
          deletedUser.onerror = (query) => {
            alert("Error Occured While Loading Initial Data");
          }
    
          tx.oncomplete = () => {
            db.close();
          }
        }
      }
    
      const handleBlankVal = () => {
        setUserData(userData.firstName === "" && userData.lastName === "" && userData.email === "")
      }
    
     
    return(
        <>
        {online ? "You are in Online Mode" : "You are in offline mode"}
  
        <div className='row' >
  
          <div className='col-md-6'>
            <button className='btn btn-primary float-end mb-2' onClick={() => {
              setAddUser(true); setEditUser(false); setSelectEditUser({}); handleBlankVal();
            }}>
              Add
            </button>
            <table className='table'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allUsersData.map(user => (
                  <tr key={user?.id}>
                    <td>{user?.userData.firstName}</td>
                    <td>{user?.userData.lastName}</td>
                    <td>{user?.userData.email}</td>
                    <td><button className='btn btn-success' onClick={() => {
                      setAddUser(false); setEditUser(true); setSelectEditUser(user); setUserData(user?.userData)
                    }}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={() => deleteUserHandler(user)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='col-md-6'>
            {addUser || editUser ? <div className='card' style={{ padding: "20px" }}>
              <h3>Add User</h3>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label>First Name</label>
                  <input type='text' className='form-control' name='firstName' value={userData.firstName} onChange={handleChange} />
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input type='text' className='form-control' name='lastName' value={userData.lastName} onChange={handleChange} />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input type='email' className='form-control' name='email' value={userData.email} onChange={handleChange} />
                </div>
                <div className='form-group'>
                  <button className='btn btn-primary' type='submit'>{editUser ? 'Update' : 'Add'}</button>
                </div>
              </form>
            </div> : null}
          </div>
  
        </div>
      </>
    )
}

export default Home