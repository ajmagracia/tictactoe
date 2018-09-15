import React, { Component } from 'react'
import './App.css'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      message: "Click a square to get started",
      win: false,
      xo: ["", "", "", "", "", "", "", "", ""],
    }
  }
  
  // This function updates the xo array (used for checking win and displaying marker)
  // It also updates counter (used for checking turn)
  // It finally updates message (used for displaying turn)
  update = (xo, nextTurn) => {
    this.setState({
      xo: xo,
      counter: this.state.counter + 1,
      message: `${nextTurn}'s turn`
    })
  }

  // This function updates win status (to prevent further moves)
  // It also updates the message to announce the winner (passed as argument in Square.js)
  announce = (who) => {
    this.setState({
      win: true,
      message: who,
    })
  }

  // This function resets all state variables
  // Because a Square shows the value inside xo at its associated index, this clears the board
  reset = () => {
    this.setState({
      xo: ["", "", "", "", "", "", "", "", ""],
      win: false,
      counter: 0,
      message: "Click a square to get started",
    })
  }

  render() {
    let { xo, win, counter, message } = this.state
    let { announce, update, reset } = this
    let squares = xo.map((square, index) => {
      return (
        <
        Square
        key =      { index }
        counter =  { counter }
        index =    { index }
        win =      { win }
        xo =       { xo }
        announce = { announce }
        update =   { update }
        />
      )
    })

    return (
      <div className = "Game">

        <div className = "Header">
         <Header message = { message }/>
        </div>

        <div className = "ttt">
          { squares }
        </div>

        <div className = "button">
          <NewGame reset = { reset }/>
        </div>

      </div>
    )
  }
}

export default Board
