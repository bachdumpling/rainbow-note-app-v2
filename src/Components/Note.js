import React from 'react'


function Note({note, handleRemove, handleSubmitProp}) {

    return (
    <div className='note' 
    style={{backgroundColor:note.color}}>
        <textarea className='note_text' defaultValue={note.text} onChange={handleSubmitProp}/>
    <div>
        {/* <p>{note.time}</p> */}
        <button id='delete-button'
        onClick={()=> handleRemove(note)}>🗑</button>
    </div>
        
    </div>
  )
}

export default Note