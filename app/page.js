'use client';
import React, { useState } from 'react'

const page = () => {
const [title, settitle] = useState('');
const [desc, setdesc] = useState('');
const [maintask, setmaintask] = useState('');

let submitHandler = (e) => {
  e.preventDefault();
  setmaintask([...maintask,{title,desc}]);
  setdesc('');
  settitle('');
}
let deleteHandler = (i) => {
  let copytext = [...maintask];
  copytext.splice(i,1);
  setmaintask(copytext);
  console.log(i)

}

let rendertask = <h2>No task are avalable here</h2>;
if(maintask.length > 0){
  rendertask = maintask.map((e,i) => {
    return <li key={i} className=' mb-3 flex items-center justify-between'>
      <div className=' flex items-center w-[40%] justify-between '>
        <h5>{e.title}</h5>
        <h6>{e.desc}</h6>
      </div>
      <button onClick={() => {
        deleteHandler();
      }}  className=' bg-red-600 text-white text-bold py-3 px-5 rounded'>Delete</button>
    </li>
  })
}


  return (
    <>
      <h1 className=' bg-black text-white text-bold text-3xl py-3 text-center'>My Todo list</h1>
    
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter task here' className=' m-6 border-black border-2 py-3 px-4 rounded-[6px]'  value={title} onChange={(e) => {
          settitle(e.target.value);
        }}/>
        <input type='text' placeholder='Enter description here' className=' m-6 border-black border-2 py-3 px-4 rounded-[6px]' value={desc} onChange={(e) => {
          setdesc(e.target.value)
        }}/>
      <button className='bg-black text-white py-3 px-5 rounded'>Add task</button>
      </form>
      <br/>
      <hr/>
      <br/>
      <div className=' bg-slate-400 p-8'>
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  )
}

export default page
