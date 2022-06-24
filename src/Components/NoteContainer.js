import Note from './Note'
import SideBar from './SideBar'

function NoteContainer({ notes, addNote, removeNote }) {
  console.log(notes)

  const noteCards = notes.map((item) => {
    return <Note key={item.id} note={item} handleRemove={removeNote} />
  })

  return (
    <div className='note-adder-container'>
      <h2 id="note-title" className="text-info mt-3">Take A Note</h2>
      <SideBar addNoteProp={addNote} />
      <div className='note-container'>

        <div className='note-containter-notes custom-scroll'>
          {noteCards}
        </div>
      </div>
    </div>

  )
}

export default NoteContainer