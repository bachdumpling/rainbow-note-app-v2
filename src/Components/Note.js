
function Note({note, handleRemove, handleSubmitProp}) {

    return (
    <div className='note' 
    style={{backgroundColor:note.color}}>
        <textarea className='note_text' defaultValue={note.text} onChange={handleSubmitProp}/>
    <div>
        <button id='delete-button'
        onClick={()=> handleRemove(note)}>🗑</button>
    </div>
        
    </div>
  )
}

export default Note