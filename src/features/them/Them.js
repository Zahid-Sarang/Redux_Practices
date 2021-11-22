import React,{ useState } from 'react'
import { useDispatch } from "react-redux";
import { chnageTextColor } from './themSlice';

const Them = () => {
    const [color,setcolor] = useState("white")
    const dispatch = useDispatch()
    return (
        <div>
        <input className="textbox" type="text" onChange={(e) =>setcolor(e.target.value)}/>
            <button className="button" onClick={()=> {dispatch(chnageTextColor(color))}}>Change Text Color</button>
        </div>
    )
}

export default Them
