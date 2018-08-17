import React, { Component } from 'react'
import './Square.css'

class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      combos: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
      isFill: false,
      value: '',
      oWinCheck: false,
      xWinCheck: false,
    }
  }

  play = () => {
    let {xo, index, counter} = this.props
    let {oWinCheck, xWinCheck, combos} = this.state
    if(!this.props.win){
      if(!this.state.isFill){
        if(counter%2===0){
          xo[index] = 'X'
          this.setState({value: 'X'})
          this.setState({isFill: true})
          this.props.update(xo)
          console.log(xo)
        } else{
          xo[index] = 'O'
          this.setState({value: 'O'})
          this.setState({isFill: true})
          this.props.update(xo)
          console.log(xo)
        }
        if(this.props.counter > 3){
          //TODO: SIMPLIFY THIS MAKE THIS BETTER THIS SUCKS RIGHT NOW
          xWinCheck = combos.some(combo => {
            return combo.every(x =>{
              return xo[x]==='X'
              })
          })
          ////////
          oWinCheck = combos.some(combo => {
            return combo.every(x =>{
              return xo[x]==='O'
              })
          })
          console.log(xWinCheck, oWinCheck)
          if(xWinCheck){
            this.props.setWin()
          } else if(oWinCheck){
            this.props.setWin()
          }
        }
      }
    }
  }

  render() {
    return (
      <div className = "Square" onClick={this.play}>{this.state.value}</div>
    )
  }
}

export default Square
