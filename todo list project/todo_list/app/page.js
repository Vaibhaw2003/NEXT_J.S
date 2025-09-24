"use client"
import React, { useState } from 'react'

const page = () => {

  const [text, setText] = useState("")
  const [dec, setDec] = useState("")
  const [time, setTime] = useState("")

  const [main, setMain] = useState([])

  const submithandl =(e)=>{
    e.preventDefault()
    setMain([...mainTask, {text,dec,time}]);
    setText(" ")
    setDec(" ")
    setTime(" ")
    console.log(mainTask)
    
  };
  let renderTask =<h3>no data available</h3>

  renderTask = mainTask.map((t,i )=>{
    return (  
    <div className='flex justify-between '>
      <h4>{t.text}</h4>
      <h4>{t.dec}</h4>
      <h4>{t.time}</h4>
    </div>
    );
  });


  return (
    <div>
      <>
      <h1 className='text-white bg-black text-5xl text-center p-5 font-bold  '>MY TODO LIST</h1>

      <form onSubmit={submithandl}>
        <input type='text'  className='text-2xl border-b-blue-800 text-black bg-amber-200 border-2 m-5 px-4 py-2 '
        placeholder = "enter text"

        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}

        />

         <input type='text'  className='text-2xl border-b-blue-800 text-black bg-amber-200 border-2 m-5 px-4 py-2 '
        placeholder = "enter descripton"

        value={dec}
        onChange={(e)=>{
          setDec(e.target.value)
        }}

        />

         <input type='text'  className='text-2xl border-b-blue-800 text-black bg-amber-200 border-2 m-5 px-4 py-2 '
        placeholder = "enter time"

        value={time}
        onChange={(e)=>{
          setTime(e.target.value)
        }}

        />

        <button className = 'bg-emerald-400 rounded-1xl text-3xl px-2 py-3 m-5 font-bold '>ADD TEXT</button>
        
      </form>
      <hr />
      <div className='p-4 bg-black text-white items-center'>
        <ul>
          {renderTask}
        </ul>


      </div>
      
      </>
    </div>
  )
}

export default page