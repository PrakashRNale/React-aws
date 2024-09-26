import React from 'react'

function UserDetails(props) {
    debugger;
  return (
    <div>  
        <ul>
            <li>
                <span>First Name</span><span>{props.user.first_name}</span>
            </li>
            <li>
            <span>last Name</span><span>{props.user.last_name}</span>
            </li>
            <li>
            <span>Email</span><span>{props.user.email}</span>
            </li>
            <li>
            <span>Gender</span><span>{props.user.gender}</span>
            </li>
        </ul>
      
    </div>
  )
}

export default UserDetails
