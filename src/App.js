import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import LoginContainer from './Components/LoginContainer';
import Nav from './Components/Nav';
import 'bootswatch/dist/simplex/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';

function App() {

  const [notes,setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/notes`)
    .then(response => response.json())
    .then(data=> 
      setNotes(data)
      )
  },[])

  function addNote(color){
    let newNote = [...notes]
//console.log('log')
    newNote.push({
      text: '',
      color,
    })

    setNotes(newNote)
  }

  function removeNote(note){
    fetch(`http://localhost:3000/notes/${note.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target.value)
        fetch('http://localhost:3000/notes', {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify()
        })
  }

  return (
    <div className="App">
      <Nav />
      <div className='container'>
        {/* <h1>hello!</h1> */}
        <Routes>
          <Route path='/LoginContainer'  element={<LoginContainer />} />
          <Route path='/Note' element= {<NoteContainer addNote={addNote} notes = {notes} removeNote={removeNote} handleSubmit={handleSubmit}/>} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
  

export default App;
