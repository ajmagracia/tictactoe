import React, {
  Component
} from 'react'
import './Square.css'

class Square extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
  let {
    counter,
    xo,
    index,
    win
  } = this.props
  // Declare current marker and next piece variables for rest of function
  // Not going to bother assigning values until necessary
  // i.e. when a valid square is clicked
  let current, next

  // Only do something if the game is not yet won
  if ( !win ) {
    // And even then, only do something if the square is not yet filled
    if ( xo[ index ] === "" ) {
      // Finally assign values to the current and next markers based on counter
      if ( counter % 2 === 0 ) {
        current = 'X'
        next = 'O'
      } else {
        current = 'O'
        next = 'X'
      }
      // xo[ index ] is what gets displayed visually
      xo[ index ] = current
      // update the xo array (used for checking win)
      // also update 'next' (used for displaying current player's turn)
      this.props.update( xo, next )
    }

    // After making a move, if X has made 3 turns, start checking for wins
    if ( this.props.counter > 3 ) {
      // Declare array of arrays of winning-line indexes (indices?)
      var combos = [
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
      var winCheck = combos.some( combo => {
        // If the following returns true for each value in an index array, return true
        return combo.every( x => {
          // If the value in the xo array at the index from the index array is equal to the current player's marker, return true
          return xo[ x ] === current
        } )
      } )

      // If someone won, alert such
      if ( winCheck ) {
        this.props.alertWin( `${current} Wins!!!` )
        // Otherwise (if no one won) if there are no more moves, alert such
      } else if ( this.props.counter === 8 ) {
        this.props.alertWin( "Tie like ya neck" )
      }
    }
  }
}

  render() {
    return (
      <div className = "Wrapper">
        <div className = "Square" onClick = {this.handleClick}>
          {this.props.xo[this.props.index]}
        </div>
      </div>
    )
  }
}

export default Square
