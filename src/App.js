import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import LoginContainer from './Components/LoginContainer';
import Nav from './Components/Nav';
import 'bootswatch/dist/simplex/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [notes,setNotes] = useState([]);

  useEffect(() => {
    getData()
  },[])

  function getData(){
    fetch(`http://localhost:3000/notes`)
      .then(response => response.json())
      .then(setNotes)
  }

  function addNote(color){
    let newNote = [...notes]

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
        getData()
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('submitting')
    console.log(e.target.value)
        fetch('http://localhost:3000/notes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({
              text: e.target.value,
              color: e.target.color
            })
        })
  }

  return (
    <div className="App">
      <Nav />
      <div className='container'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/LoginContainer'  element={<LoginContainer />} />
          <Route path='/Note' element= {<NoteContainer addNote={addNote} notes = {notes} removeNote={removeNote} handleSubmit={handleSubmit}/>} />
        </Routes>
      </div>
    </div>
  );
}
  

export default App;
