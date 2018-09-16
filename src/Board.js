import React, { Component } from 'react'
import './App.css'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

// The Board consists of 3 main parts:
// A "Header", which is really just a message and name of the game,
// Squares, which are just representations of the Board's state,
// and the New Game button, which resets the game
class Board extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      message: "Click a square to get started",
      win: false,
      xo: [ "", "", "", "", "", "", "", "", "" ],
    }
  }

  // This function updates the xo array (used for checking win and displaying marker)
  // It also updates counter (used for checking turn)
  // It finally updates message (used for displaying turn)
  update = ( index, currentMarker, nextMarker ) => {
    let { xo, counter } = this.state

    // xo[ index ] is what gets displayed visually
    xo[ index ] = currentMarker

    this.setState( {
      xo: xo,
      counter: counter + 1,
      message: `${nextMarker}'s turn`
    } )
  }

  checkWin = ( marker ) => {
    let { announce } = this
    let { xo, counter } = this.state

    // These arrays represent xo indexes of winning combinations
    const combos = [
      [ 0, 1, 2 ],
      [ 3, 4, 5 ],
      [ 6, 7, 8 ],
      [ 0, 3, 6 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 0, 4, 8 ],
      [ 2, 4, 6 ]
    ]

    // If one of the arrays inside combos returns true, return true
    let isThereWinner = combos.some( combo => {
      // If the following returns true for each value in an index array, return true
      return combo.every( x => {
        // If the xo[index] contains the marker, return true
        return xo[ x ] === marker
      } )
    } )

    // If someone wins, alert such
    if ( isThereWinner ) {
      announce( `${marker} Wins!!!` )
      // Otherwise if there are no more moves and no winner, alert such
    } else if ( counter === 8 ) {
      announce( "This is usually a tie, but it's 2018 so everyone's a winner" )
    }
  }

  // This function updates win status (to prevent further moves)
  // It also updates the message to announce the message (passed as argument)
  announce = ( what ) => {
    this.setState( {
      win: true,
      message: what,
    } )
  }

  // This function resets all state variables
  // Because Squares are just representations of xo, this clears the board
  reset = () => {
    this.setState( {
      xo: [ "", "", "", "", "", "", "", "", "" ],
      win: false,
      counter: 0,
      message: "Click a square to get started",
    } )
  }

  render() {
    let { xo, win, counter, message } = this.state
    let { checkWin, update, reset } = this
    let squares = xo.map((square, index) => {
      return (
        <
        Square
        key =      { index }
        counter =  { counter }
        index =    { index }
        win =      { win }
        xo =       { xo }
        checkWin = { checkWin }
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
