import React, {
  Component
} from 'react'
import './Square.css'

class Square extends Component {
  constructor(props) {
    super(props)
    this.state = {
      xWinCheck: false,
      oWinCheck: false
    }
  }

  play = () => {
    let {
      counter,
      xo,
      index,
      win
    } = this.props
    let {
      xWinCheck,
      oWinCheck,
      value
    } = this.state
    console.log(xo)
    if (!win) {
      if (xo[index]=== "") {
        if (counter % 2 === 0) {
          xo[index] = ('X')
          this.props.update(xo,'O')
        } else {
          xo[index] = ('O')
          this.props.update(xo,'X')
        }

        if (this.props.counter > 3) {
          var combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ]
          xWinCheck = combos.some(combo => {
            return combo.every(x => {
              return xo[x] === 'X'
            })
          })
          ////////
          oWinCheck = combos.some(combo => {
            return combo.every(o => {
              return xo[o] === 'O'
            })
          })
          if (xWinCheck || oWinCheck) {
            this.props.alertWin(`${xo[counter-1]} Wins!!!`)
          } else if (this.props.counter === 8) {
            this.props.alertWin("Tie like ya neck")
          }
        }
      }
    }
  }
  render() {
    return (
      <div className = "Wrapper">
        <div className = "Square" onClick = {this.play}>
          {this.props.xo[this.props.index]}
        </div>
      </div>
    )
  }
}

export default Square
