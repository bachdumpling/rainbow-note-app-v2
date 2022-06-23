import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';
import Header from './Components/Header';
import LoginContainer from './Components/LoginContainer';
import Nav from './Components/Nav';
import 'bootswatch/dist/simplex/bootstrap.min.css';



function App() {

  const [notes,setNotes] = useState([])

  useEffect(() => {
    getData()
  },[])

  function getData(){
    fetch(`http://localhost:3000/notes`)
      .then(response => response.json())
      .then(setNotes)
  }

  function addNote(color){
    const newNote = [...notes]

    newNote.push({
      text: '',
      time: Date.now(),
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
    console.log("submitting")
    console.log(e.target.value)
        const newNote = {
            text: e.target.value,
            time: Date.now(),
            color: e.target.value
        }

        fetch(`http://localhost:3000/notes`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newNote)
        })
  }

  return (
    <div className="App">
      <Nav />
      <span><Header /></span><span><LoginContainer /></span>
      <div>
      <SideBar addNote={addNote} />
      </div>
      <div>
      <NoteContainer addNote={addNote} notes = {notes} removeNote={removeNote} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}
  

export default App;
