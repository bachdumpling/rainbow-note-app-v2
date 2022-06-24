import Note from './Note'
import SideBar from './SideBar'

function NoteContainer({notes, addNote, removeNote}) {
    console.log(notes)  
  
    const noteCards = notes.map((item) => {
    return <Note key = {item.id} note = {item} handleRemove = {removeNote}/>
  }) 
  
    return (
    <div className='note-container'>
        <h2 id="note-title" className="text-info mt-3">Note</h2>  
        <SideBar addNoteProp={addNote} />
        <div className='note-containter-notes custom-scroll'>
            {noteCards}
        </div>
    </div>
  )
}

export default NoteContainer