import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer';
import LoginContainer from './Components/LoginContainer';
import Nav from './Components/Nav';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    getData()
  },[])

  function getData(){
    fetch(`http://localhost:4000/notes`)
      .then(response => response.json())
      .then(data=> 
        setNotes(data))
  }

  function addNote(color){
    const newNote = {
      text : "",
      time : "13 July",
      color : color
    }

    fetch(`http://localhost:4000/notes`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newNote)
    }).then(response => response.json())
    .then((data) => setNotes([...notes, data]))
  }

  function removeNote(note){
    fetch(`http://localhost:4000/notes/${note.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        getData()
  }
  
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/LoginContainer'  element={<LoginContainer />} />
          <Route path='/Note' element= {<NoteContainer addNote={addNote} notes = {notes} removeNote={removeNote}/>} />
          <Route path='/About' element={<About />} />
        </Routes>
    </div>
  );
}
  

export default App;
