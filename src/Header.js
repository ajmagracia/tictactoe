import React from 'react'

export default function Header(props) {
    return(
      <div>
        <h1 className="header">Tic Tac Toe</h1>
        <h2 className="header">{ props.message }</h2>
      </div>
    )
}
