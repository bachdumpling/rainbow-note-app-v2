import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import SideBar from './Components/SideBar/SideBar';
import LoginContainer from './Components/LoginContainer';
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
    console.log(e.target.text)
        const newNote = {
            text: e.target.text.value,
            time: Date.now(),
            color: e.target.color.value
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
      <div>
        <LoginContainer />
      </div>
      <br/>
      <SideBar addNote={addNote} />
      <NoteContainer addNote={addNote} notes = {notes} removeNote={removeNote} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
