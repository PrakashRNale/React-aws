import React, {useState, useEffect} from 'react'
import UserDetails from './UserDetails.js/UserDetails';
import "./style.css";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsers()
    },[])

    const getUsers = async () =>{
        const result = await fetch('myapi.myapp.in:8000/users');
        const formatedUsers = await result.json();
        debugger;
        setUsers(formatedUsers);
    }
  return (
    <div className='user-list'>
      {
        users.length > 0 ?
        users.map((user) => {
            debugger;
            return <UserDetails user={user} name="Test" />
        })
        :
        <h3>No users present</h3>
      }
    </div>
  )
}

export default UserList
