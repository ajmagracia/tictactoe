import React, {
  Component
} from 'react'
import './App.css'
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      xo: ["", "", "", "", "", "", "", "", ""],
      win: false,
      message: "Click a square to get started",
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
  // This function updates win status
  // It also updates the message to announce the winner (passed as argument in Square.js)
  alertWin = (who) => {
    this.setState({
      win: true,
      message: who,
    })
  }

  // This function does what the last one does, but announces a tie
  alertTie = () => {
    this.setState({
      win: true,
      message: `Tie like ya neck`,
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
    let squares = this.state.xo.map((square, index) => {
      return ( <
        Square index = {
          index
        }
        key = {
          index
        }
        alertWin = {
          this.alertWin
        }
        win = {
          this.state.win
        }
        xo = {
          this.state.xo
        }
        update = {
          this.update
        }
        counter = {
          this.state.counter
        }
        />
      )
    })
    return (
      <div className="Game">
        <div className="Header">
         <Header message={this.state.message}/>
        </div>
        <div className="ttt">
          {squares}
        </div>
        <div className ="button">
          <NewGame reset={this.reset}/>
        </div>
      </div>
    )
  }
}

export default Board
