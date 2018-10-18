import React from 'react'
import '../../css/Square.css'

/*
A square just denotes a clickable part of the board, and is thus stateless
It only serves to update the state of the board when clicked,
as well as display its associated value (X or O) from Board.
We pass in props only to display the appropriate marker,
as well as to call handleClick with the proper index
*/
export default function Square(props) {
  let { xo, index, handleClick } = props
  return (
    <div className="Wrapper">
      <div className="Square" onClick={() => handleClick(index)}>
        {xo[index]}
      </div>
    </div>
  )
}
