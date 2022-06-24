import React from 'react'
import Note from './Note'
import SideBar from './SideBar'

function NoteContainer({noteData, removeNote, handleSubmit, addNote}) {
  
    const noteCards = noteData.map((item) => {
    return <Note key = {item.id} note = {item} handleRemove = {removeNote} handleSubmitProp ={handleSubmit} />
  }) 
  
    return (
    <div className='note-container'>
        <h2 className="text-info"></h2>  
        <SideBar addNoteProp={addNote} />
        <div className='note-containter-notes custom-scroll'>
            {noteCards}
        </div>
    </div>
  )
}

export default NoteContainer