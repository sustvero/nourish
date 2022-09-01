import React from 'react'
import './styles.css'
import { VscArrowLeft } from "react-icons/vsc";

const BackButton = (props) => {
  const arrowStyle = { fontSize: "1.1rem", fontWeight: "bold" }

  return (
    <div className='back-section'>
        <button className="back-btn" onClick={props.onClick}>
            <VscArrowLeft style={arrowStyle}/>
            <label>Back to {props.location}</label>
        </button> 
    </div>
  )
}

export default BackButton