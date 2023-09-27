import React, { useState } from 'react';
import "./pages.css";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNote } from "../redux/notes";

const Page = () => {
  const items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const addButtonStyle = {
    backgroundColor: backgroundColor,
    display: backgroundColor === "white" ? "none" : "block"
  };
  
  const handleAddButton = () => {
    if(!noteTitle )
    {
      alert('title can not be empty')
    }
    else if(!noteContent){
      alert('content can not be empty')
    }
  };


  return (
    <div className='pages'>
      <h1 style={{ color: "black" }}>Rukiye's Note App</h1>
      <div className="page">
        <div className="up">
          <div className="left">
            <h2>Note Title</h2>
            <input type="text" className='input1' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}/>
            <h2>Note</h2>
            <textarea name="" id="" cols="30" rows="10" className='textarea' value={noteContent} onChange={(e) => setNoteContent(e.target.value)}></textarea>
          </div>
          <div className="right">
            <h2>Choose A Color</h2>
            <div className="colors">
              <button className='pink' onClick={(e) => setBackgroundColor("#E91E63")}></button>
              <button className='purple' onClick={(e) => setBackgroundColor("#9C27B0")}></button>
              <button className='blue' onClick={(e) => setBackgroundColor("#1E88E5")}></button>
              <button className='green' onClick={(e) => setBackgroundColor("#1dca1d")}></button>
              <button className='yellow' onClick={(e) => setBackgroundColor("#FFEB3B")}></button>
              <button className='orange' onClick={(e) => setBackgroundColor("#FF8F00")}></button>
            </div>
            <button className='add' style={addButtonStyle} onClick={handleAddButton}>Add</button>
          </div>
        </div>
        <div className="middle" style={{ margin: "20px" }}>
          <h2 style={{ color: "black" }}>Search</h2>
          <input type="text" className='inputmiddle' />
        </div>
        <div className="down">
          <div className="card">
            <div className="icerik" style={{ textAlign: "left" }}>
              <h2>Başlık</h2>
              <p>icerik</p>
            </div>
            <div className="icons">
              <BiSolidEdit className='icon' />
              <AiFillDelete className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
