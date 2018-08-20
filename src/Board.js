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
      squareArray: ["", "", "", "", "", "", "", "", ""],
      win: false,
      message: "Click a square to get started",
    }
  }

  update = (xo, nextTurn) => {
    this.setState({
      xo: xo,
      counter: this.state.counter + 1,
      message: `${nextTurn}'s turn`
    })
  }

  alertWin = (who) => {
    this.setState({
      win: true,
      message: who,
    })
  }

  alertTie = () => {
    this.setState({
      win: true,
      message: `Tie like ya neck`,
    })
  }

  reset = () => {
    this.setState({
      xo: ["", "", "", "", "", "", "", "", ""],
      win: false,
      counter: 0,
      message: "Click a square to get started",
    })
  }

  render() {
    let squares = this.state.squareArray.map((square, index) => {
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
