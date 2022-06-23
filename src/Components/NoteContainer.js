import React from 'react'
import Note from './Note'

function NoteContainer({notes, removeNote, handleSubmit, addNote}) {
  
    const noteCards = notes.map((item) => {
    return <Note key = {item.id} note = {item} handleRemove = {removeNote} handleSubmitProp ={handleSubmit} />
  }) 
  
    return (
    <div className='note-container'>
        <h2>Note</h2>
        <div className='note-containter-notes custom-scroll'>
            {noteCards}
        </div>
    </div>
  )
}

export default NoteContainer