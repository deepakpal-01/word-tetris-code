import React from 'react'

export default function DisplayScore({text}) {
  return (
    <div style={{color:"blue"}}>
      <i className="fa-solid fa-flag mx-2"></i>
      Score : {text}
    </div>
  )
}
