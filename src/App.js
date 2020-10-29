import React, { useEffect } from 'react';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useState } from 'react';

function App() {
  const [like, setLike] =useState(' ');
  const handle =()=>{
    const color = like ?'' : 'primary';
    setLike(color)
    
  }
  const [users, setUsers]= useState([])
  const [single, setSingle]= useState({})
  const [random, setRandom]= useState({})
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setUsers(data))

    //single user

    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=> res.json())
    .then(data=>setSingle(data))

    //random users
    fetch('https://randomuser.me/api/')
    .then(res=> res.json())
    .then(data=>setRandom(data.results[0]))


  },[])
  return (
    <div>
    <ThumbUpAltIcon onClick={handle} color={like}></ThumbUpAltIcon>
  <h1>{single.name}</h1>
  <h2>{random.name?.first}</h2>
    {
      users.map(user=><li>{user.name}</li>)
    }
    </div>
  );
}

export default App;
