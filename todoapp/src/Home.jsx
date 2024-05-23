import React, { useEffect, useState } from 'react';
import "./App.css";
import Create from './Create';
import axios from 'axios';
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
<RiCheckboxCircleLine />
import { MdDeleteForever } from "react-icons/md";


const Home = () => {
    const [todo,setTodo] =useState([]);
    useEffect(()=>{
      axios.get('http://localhost:3001/get')
      .then(result=>setTodo(result.data))
      .catch(err => console.log(err))
    },[]);
    const handleEdit=(id) =>{
      axios.put('http://localhost:3001/update/' +id)
      .then(result=>{location.reload()})
      .catch(err => console.log(err));
    }
    const handleDelete=(id) =>{
      axios.delete('http://localhost:3001/delete/' +id)
      .then(result=>{location.reload()})
      .catch(err => console.log(err));
    }
  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create/>
        <br/>
        { todo.length === 0 ? <div><h2>No Record</h2></div> :
        todo.map(to => (
            <div className='task' >
              <div className="check" onClick={()=> handleEdit(to._id)}>
                {to.done  ? < RiCheckboxCircleLine className='icon'/> :<RiCheckboxBlankCircleLine className='icon'  /> }
                
                <p className={to.done  ? 'line' : ''}>{to.task}</p>
              </div>
                <div>
                  <span> <MdDeleteForever onClick={()=> handleDelete(to._id)} className='icon'/> </span>
                </div> 
            </div>
        ))}
    </div>
  )}


export default Home