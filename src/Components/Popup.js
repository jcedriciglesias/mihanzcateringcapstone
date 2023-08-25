import React from 'react'
import "./Popup.css"
import { FaRegTimesCircle } from "react-icons/fa";

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)} ><FaRegTimesCircle/></button>
            {props.children}
        </div>  
    </div>
  ): "";
}

export default Popup
