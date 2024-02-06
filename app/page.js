'use client';
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  const [maintask, setmaintask] = useState('');

  let submitHandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    settitle('');
    setdesc('');
  };
  let rendertask = <h2>No task here</h2>;
  if(maintask.length > 0){
    rendertask = maintask.map((e,i) => {
      return(
        <li key={i} className=' flex items-center justify-between text-center mb-4'>
          <div className=' flex items-center justify-between w-[40%]'>
            <h5>{e.title}</h5>
            <h6>{e.desc}</h6>
          </div>
          <button onClick={ () => {
            deleteHandler()
          }} className=' bg-red-600 py-3 px-4 text-white font-bold  rounded'>Delete</button>
        </li>
      )
    })
  };

let deleteHandler = (i) => {
  let copytext = [...maintask];
  copytext.splice(i,1);
  setmaintask(copytext);
}



  return (
    <div>
      <h2 className=' w-full py-6 bg-black text-white text-3xl font-bold text-center'>My To do list</h2>
      <form onSubmit = {submitHandler}>
        <input type='text' placeholder='Enter your task here ' className=' border-2 border-black py-3 px-5 m-4 rounded' value={title} onChange={(e) => {
          settitle(e.target.value);
        }}/>
        <input type='text' placeholder='Enter your description here' className=' border-2 border-black py-3 px-5 m-4 rounded' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }}/>
        <button  className=' bg-black text-white font-bold py-3 px-4 rounded'>Add task</button>
        <br/>
        <hr/>
      </form>
      <div className=' bg-slate-400 p-8'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </div>
  )
}

export default page
