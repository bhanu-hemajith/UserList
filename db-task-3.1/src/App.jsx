import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[users,setUsers] = useState([])
  
  const fetchUsers = async()=>{
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setUsers(response.data)
    
  };

  useEffect(()=>{
     fetchUsers();
  },[])

  const deleteUser = (userid)=>{
    let usersFiltered = users.filter((user)=> user.id !== userid)
    setUsers(usersFiltered)
  }

  return (
    <>
      <div className='App'>
        <ul>
          {users.map((data)=>(
            <div className='wrapper' key={data.id}>
              <span>{data.name} </span>
              <button className='delete-btn' onClick={()=> deleteUser(data.id)}>Delete</button>
            </div>
          ))}
        </ul>
        
      </div>
    </>
    
  )
}

export default App
