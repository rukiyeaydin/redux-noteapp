import React, { useState } from 'react';
import "./pages.css";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNote, deleteNote, searchFilter } from "../redux/notes";
import { nanoid } from '@reduxjs/toolkit';

const Page = () => {
  const items = useSelector((state) => {
    const searchQuery = state.notes.actives.toLowerCase();
    return state.notes.items.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery) || item.content.toLowerCase().includes(searchQuery);
    });
  });
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
    else{
      dispatch(addNote({id:nanoid(), title: noteTitle, content: noteContent, color:backgroundColor}));
    }
    
    setNoteTitle('');
    setNoteContent('');
    setBackgroundColor('white');
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
          <input type="text" className='inputmiddle' placeholder='search...' onChange={(e) => dispatch(searchFilter(e.target.value))}/>
        </div>
        <div className="down">
          {items.map((item) => (
          <div className="card" key={item.id} style={{backgroundColor:item.color}}> 
            <div className="icerik" style={{ textAlign: "left" }}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <div className="icons">
              <AiFillDelete className='icon' onClick={() => dispatch(deleteNote(item.id))} />
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
