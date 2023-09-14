import React from 'react'
import Time from "./Time"
import StartButton from './StartButton'
import "../components/Styles/Footer.css"

export default function Footer() {
  return (
    <>
        <div className="footer">               
        <StartButton/>
        <div className="leftBox">
        <button type='button'><i className="fa-regular fa-lightbulb"></i> HINT</button>        
        <div className="timeBox">
        <i className="fa-regular fa-clock"></i>
        <Time/>
        </div>
        </div>
        </div>
        
    </>
  )
}
