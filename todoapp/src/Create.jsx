import React, { useState } from 'react';
import "./App.css";
import axios from "axios";
const Create = () => {
  const [task,setTask] = useState();
  const handle=()=>{
    axios.post('http://localhost:3001/add', {task : task})
    .then(result => {location.reload()})
    .catch(err => console.log(err))
  }
  return (
    <div>
      <input type="text" placeholder='TEXT HERE'  className='form' onChange={(e)=> setTask(e.target.value)}/>
      <button onClick={handle} type='btn' className='fbtn' > Add </button>
    </div>
  )
}

export default Create