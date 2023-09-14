import React from 'react'
import logo from '../images/userfacet.png';
import './Styles/Navbar.css'
import Display from './DisplayScore'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img src={logo} alt="logo" height={"15px"} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" headData collapse navbar-collapse" id="navbarSupportedContent" style={{width:"40vw"}}>
        <div><h5>Word-Tetris</h5></div>
        {<Display text={"00"}/>}
    </div>
  
  </div>
</nav>
  )
}
