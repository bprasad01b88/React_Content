import React, { useEffect, useState } from 'react'
import { useIndexedDB } from 'react-indexed-db-hook';
import * as serviceWorker from './../serviceWorker';
const Home = () => {

    const [userData, setUserData] = useState({
        name : '',
        email : ''
    });

    const [users, setUsers] = useState([]);
    const [ isEdit, setIsEdit] = useState(false);
    const [editUserId, setEditUserId] = useState(null);

    const { add, getAll, update, deleteRecord } = useIndexedDB("people");

    const handleChange = (e) => {
        const initUser = {...userData, [e.target.name] : e.target.value};
        setUserData(initUser);
    }

   
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!navigator.onLine){
            serviceWorker.registerSync();
            if(isEdit){
                if(editUserId !== null){
                    update({id : userData.id, name : userData.name, email: userData.email}).then(
                        alert("User Update Successfully!"),
                        getData(),
                        setUserData({name : '', email : ''}),
                        setIsEdit(false)
                    )
            }
            }else{
                add({ name: userData.name, email: userData.email }).then(
                    (event) => {
                      console.log("ID Generated: ", event);
                      setUserData({name : '', email : ''});
                      getData();
                    },
                    (error) => {
                      console.log(error);
                    },
                  );
            }
        }
      };

    const getData = () => {
        getAll().then((item) => {
            setUsers(item);
        })
    }

    const handleEdit = (id) => {
        const editToUser = users.find(user => user.id === id);
        if(editToUser){
            setUserData(editToUser);
            setEditUserId(id);
            setIsEdit(true);
        }
    }

    const handleDelete = (id) => {
        deleteRecord(id).then((event) => {
            alert("User is Deleted!");
            getData();
        })
    }
    useEffect(() => {
        getData();
    }, [])
  return (
    <div>
        <form className='p-10' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name='name' value={userData.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name='email' value={userData.email} onChange={handleChange}/>
            </div>
            <div className="mt-2">
                <button className="btn btn-primary" type='submit'>{isEdit ? "Update" : "Add"}</button>
            </div>
        </form>
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user?.id}> 
                            <td>{user?.id}</td>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handleEdit(user.id)}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home