import React,{useState} from 'react'
import plusIcon from './plus.png'

function SideBar({addNoteProp}) {
    const color = ["#fe9b72 ", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]

    const [listOpen, setListOpen] = useState(false)
//console.log(addNoteProp)
    const colorPicker = color.map((item) => {
        return <li key={item.id}
        className='sidebar_list_item'
        style={{backgroundColor: item}}
        onClick={() => addNoteProp(item) } />})

    return (
    <div className='sidebar'>
        <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colorPicker}
        </ul>
    </div>
  )
}

export default SideBar