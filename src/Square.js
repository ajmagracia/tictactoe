import React, { Component } from 'react'
import './Square.css'

// A square just denotes a clickable part of the board, and is thus stateless
// It only serves to update the state of the board when clicked,
// as well as display its associated value (X or O) from Board.
// We pass in props only to provide checks for action,
// As well as to call Board methods with appropriate arguments (decided per square)
class Square extends Component {

  handleClick = () => {
    let { counter, xo, index, win, checkWin, update } = this.props

    // Declare current and next marker variables for rest of function
    let current, next

    // Only do something if the game is not yet won
    if ( !win ) {
      // Even then, only do something if the square is not yet filled
      if ( xo[ index ] === "" ) {
        // Assign values to current and next markers based on counter
        if ( counter % 2 ) {
          current = 'O'
          next = 'X'
        } else {
          current = 'X'
          next = 'O'
        }

        // Update the xo array (used for checking win)
        // Update 'next' (used for displaying current player's turn)
        update(index, current, next )
      }

      // After making a move, if X has made 3 turns, start checking for wins
      if ( counter > 3 ) {
        // Declare array of arrays of winning-line indexes (indices?)
        checkWin( current )
      }
    }
  }

  render() {
    let { xo, index } = this.props
    return (
      <div className = "Wrapper">
        <div className = "Square" onClick = {this.handleClick}>
          {xo[index]}
        </div>
      </div>
    )
  }
}

export default Square
