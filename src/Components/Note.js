import React,{useState, useEffect} from 'react'
import "./Note.css";

function Note({note, handleRemove}) {
    console.log(note)

    const [form, setForm] = useState(note.text)

    function handleChange(e){
        setForm(e.target.value)
    }

    useEffect(() => {
        
        const newNote = {...note, text : form}
        console.log(newNote)
        
        if(note){
            fetch(`http://localhost:4000/notes/${note.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
        },
            body: JSON.stringify(newNote)
        })
        }
    },[form])

    return (
    <div className='note' style={{backgroundColor:note.color}}>
            
            <textarea value={form} className='note_text' onChange={handleChange}/>
            
        <div>
            <button id='delete-button' onClick={()=> handleRemove(note)}>🗑</button>
        </div>
    </div>
  )
}

export default Note