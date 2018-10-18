import React from 'react'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

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

// The Board renders 3 main parts:
// A "Header", which is really just a message and name of the game,
// Squares, which are just representations of the Board's state,
// and the New Game button, which resets the game
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: undefined,
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
    if ( win || xo[ index ] !== "" ) return
    const counter = xo.join("").length,
          current = this._assignMarkers( counter )[0]

    this._update( index, current, xo, counter + 1 )
  }

  // Assign values to current and next markers based on counter
  _assignMarkers = ( counter ) => {
    return counter % 2 ? ['O','X'] : ['X','O']
  }

  // This function updates and sets state of xo and win via _checkWin
  _update = ( index, currentMarker, xo, counter ) => {
    xo[ index ] = currentMarker // This gets displayed on the Square

    this.setState({ xo, win: this._checkWin( currentMarker, xo, counter ) })
  }

  // This function checks/updates that a winning combination exists on the board
  _checkWin = ( marker, xo, counter ) => {
    if ( counter < 5 ) return undefined // Only win-check if winning is possible
    const winnerExists = this._matchArrayItems( combos, xo, marker )

    // If game ends, set state accordingly
    return counter === 9 && !winnerExists ? false : winnerExists
  }

  // This function finds the first set of defined indexes of sourceArray that contain a given item
  _matchArrayItems = ( indexList, sourceArray, item ) => {
    return indexList.find( array => {
      return array.every( index => {
        return sourceArray[ index ] === item
      })
    })
  }

  // This method returns the message for Header to display
  announce = (win, counter) => {
    const [ current, prev ] = this._assignMarkers(counter)
    return counter === 0 ? "Click a square to get started"
         : win === false ? "This is usually a tie, but it's 2018 so everyone's a winner"
         : win           ? `${prev} wins!`
         :                 `${current}'s turn`
  }

  // This function "resets" xo and win status
  // Because Squares are just representations of xo, this clears the board
  reset = () => {
    this.setState({ xo: [ "", "", "", "", "", "", "", "", "" ], win: undefined })
  }
}
