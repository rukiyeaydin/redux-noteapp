import React from 'react'
import "./pages.css"
import {BiSolidEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Page = () => {
  return (
    <div className='pages'>
      <h1 style={{color:"black"}}>Rukiye's Note App</h1>
      <div className="page">
        <div className="up">
          <div className="left">
            <h2>Note Title</h2>
            <input type="text" className='input1'/>
            <h2>Note</h2>
            <textarea name="" id="" cols="30" rows="10" className='textarea'></textarea>
          </div>
          <div className="right">
            <h2>Choose A Color</h2>
            <div className="colors">
              <button className='pink'></button>
              <button className='purple'></button>
              <button className='blue'></button>
              <button className='green'></button>
              <button className='yellow'></button>
              <button className='orange'></button>
            </div>
            <button className='add'>Add</button>
          </div>
        </div>
        <div className="middle" style={{margin:"20px"}}>
          <h2 style={{color:"black"}}>Search</h2>
          <input type="text" className='inputmiddle'/>
        </div>
        <div className="down">
          <div className="card">
            <div className="icerik" style={{textAlign:"left"}}>
              <h2>Başlık</h2>
              <p>icerik</p>
            </div>
            <div className="icons">
              <BiSolidEdit className='icon'/>
              <AiFillDelete className='icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
