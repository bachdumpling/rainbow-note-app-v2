import React from 'react'
import Note from './Note'
import SideBar from './SideBar'

function NoteContainer({notes, removeNote}) {
    console.log(notes)  
  
    const noteCards = notes.map((item) => {
    return <Note key = {item.id} note = {item} handleRemove = {removeNote}/>
  }) 
  
    return (
    <div className='note-container'>
        <h2>Take A Note</h2>
        <div className='note-containter-notes custom-scroll'>
            {noteCards}
        </div>
    </div>
  )
}

export default NoteContainer