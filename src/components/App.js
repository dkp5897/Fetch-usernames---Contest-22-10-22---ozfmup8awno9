import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
const [id , setId] = useState(1)
const [name , setName] = useState('')

const fetchData = () =>{
  fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
  .then((r) =>{
    r.json().then((res)=>{
      setName(res.name)
      console.log(res);
    })
  })
  .catch((error)=>{
    console.log(error);
    
  })
}

useEffect(()=>{
  fetchData()
})

const changeInput = (event) =>{
  setId(event.target.value);
}
 
  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
}


export default App;
