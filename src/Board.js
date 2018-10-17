import React from 'react'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

// The Board renders 3 main parts:
// A "Header", which is really just a message and name of the game,
// Squares, which are just representations of the Board's state,
// and the New Game button, which resets the game
export default class Board extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      message: "Click a square to get started",
      win: false,
      xo: [ "", "", "", "", "", "", "", "", "" ],
    }
  }

  render() {
    const { xo, message } = this.state,
          squares = xo.map(( square, index ) => {
      return (
        <Square
          key = { index }
          index = { index }
          xo = { xo }
          handleClick = { this.handleClick }
        />
      )
    })

    return (
      <React.Fragment>
        <div className = "Header">
          <Header message = { message }/>
        </div>
        <div className = "ttt">
          { squares }
        </div>
        <div className = "button">
          <NewGame reset = { this.reset }/>
        </div>
      </React.Fragment>
    )
  }

  handleClick = ( index ) => {
    const { counter, xo, win } = this.state,
          { _update, _assignMarkers } = this

    // Only do something if the game is not yet won and space is not filled
    if ( win || xo[ index ] !== "" ) return

    const [ current, next ] = _assignMarkers(counter)
    _update( index, current, next, xo, counter + 1 )
  }

  // Assign values to current and next markers based on counter
  _assignMarkers = ( counter ) => {
    return counter % 2 ? ['O','X'] : ['X','O']
  }

  // This function updates the xo array (used for checking win and displaying marker)
  // It also updates counter (used for checking turn)
  // It finally updates message (used for displaying turn)
  _update = ( index, currentMarker, nextMarker, xo, counter ) => {
    const { _checkWin } = this
    xo[ index ] = currentMarker // This gets displayed on the Square
    
    this.setState({
      xo,
      counter,
      message: `${nextMarker}'s turn`
    }, () => {
      _checkWin( currentMarker, xo, counter )
    })
  }

  // This function checks if a winning combination exists on the board
  // If so, or a tie, announces appropriately
  _checkWin = ( marker, xo, counter ) => {
    // Only win-check if winning is possible
    if ( counter < 4 ) return
    const { _announce } = this,
          combos = [ // These arrays represent xo indexes of winning combinations
      [ 0, 1, 2 ],
      [ 3, 4, 5 ],
      [ 6, 7, 8 ],
      [ 0, 3, 6 ],
      [ 1, 4, 7 ],
      [ 2, 5, 8 ],
      [ 0, 4, 8 ],
      [ 2, 4, 6 ]
    ]

    // If one of the arrays inside combos returns true, returns true, else false
    const winnerExists = combos.some( combo => {
      // If the following returns true for each value in an index array, return true
      return combo.every( x => {
        // If xo[index] contains the marker, return true
        return xo[ x ] === marker
      })
    })

    // If someone wins, alert such
    if ( winnerExists ) return _announce( `${marker} Wins!!!` )
    // Otherwise if there are no more moves and no winner, alert such
    if ( counter === 9 ) _announce( "This is usually a tie, but it's 2018 so everyone's a winner" )
  }

  // This function updates win status (to prevent further moves)
  // It also updates the message to announce the message (passed as argument)
  _announce = ( what ) => {
    this.setState({
      win: true,
      message: what,
    })
  }

  // This function "resets" all state variables
  // Because Squares are just representations of xo, this clears the board
  reset = () => {
    this.setState({
      xo: [ "", "", "", "", "", "", "", "", "" ],
      win: false,
      counter: 0,
      message: "Click a square to get started",
    })
  }
}
