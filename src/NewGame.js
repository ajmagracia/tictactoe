import React from 'react'
import './button.css'

export default function NewGame(props) {
  return(
    <div className="button">
      <button onClick={props.reset} children="Reset Game" />
    </div>
  )
}
