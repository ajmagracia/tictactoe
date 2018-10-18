import React from 'react'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

// The Board renders 3 main parts:
// A "Header", which is really just a message and name of the game,
// Squares, which are just representations of the Board's state,
// and the New Game button, which resets the game
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: false,
      xo: [ "", "", "", "", "", "", "", "", "" ],
    }
  }

  render() {
    const { xo, win } = this.state,
          counter = xo.join("").length,
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
        <Header children = { this.announce( win, counter ) }/>
        <div className = "ttt">
          { squares }
        </div>
        <NewGame reset = { this.reset }/>
      </React.Fragment>
    )
  }

  handleClick = ( index ) => {
    const { xo, win } = this.state
    // Only do something if the game is not yet won and space is not filled
    if ( win !== false || xo[ index ] !== "" ) return
    const { _update, _assignMarkers } = this,
          counter = xo.join("").length,
          current = _assignMarkers( counter )[0]

    _update( index, current, xo, counter + 1 )
  }

  // Assign values to current and next markers based on counter
  _assignMarkers = ( counter ) => {
    return counter % 2 ? ['O','X'] : ['X','O']
  }

  // This function updates the xo array (used for checking win and displaying marker)
  // It then calls the checkWin function
  _update = ( index, currentMarker, xo, counter ) => {
    xo[ index ] = currentMarker // This gets displayed on the Square
    const { _checkWin } = this,
          win = _checkWin( currentMarker, xo, counter )

    this.setState({ xo, win })
  }

  // This function checks/updates that a winning combination exists on the board
  _checkWin = ( marker, xo, counter ) => {
    if ( counter < 5 ) return false // Only win-check if winning is possible
    const combos = [ // These arrays represent xo indexes of winning combinations
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

    // If game ends, set state accordingly
    if ( counter === 9 && !winnerExists ) return undefined
    return winnerExists
  }

  // This method sets the message for Header to display
  announce = (win, counter) => {
    const [ next, current ] = this._assignMarkers(counter)
    if ( counter === 0 ) return "Click a square to get started"
    if ( win === undefined ) return "This is usually a tie, but it's 2018 so everyone's a winner"
    if ( win ) return `${current} wins!`
    return `${next}'s turn`
  }

  // This function "resets" xo and win status
  // Because Squares are just representations of xo, this clears the board
  reset = () => {
    this.setState({
      xo: [ "", "", "", "", "", "", "", "", "" ],
      win: false
    })
  }
}
