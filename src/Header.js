import React, { Component } from 'react'
import './App.css'

class Header extends Component {
  constructor(){
    super()
    this.state={
      message: "x",
      visibility: "hidden"
    }
  }
  render(){
    if(this.props.win&&this.props.counter%2===1&&this.state.message==='x'){
      this.setState({message: 'X WINS!!'})
      this.setState({visibility: "visible"})
    } else if(this.props.win&&this.props.counter%2===0&&this.state.message==='x'){
      this.setState({message: 'O WINS!!'})
      this.setState({visibility: "visible"})
    } else if(this.props.counter===9&&this.state.message==='x'){
      this.setState({message: 'TIE GAME'})
      this.setState({visibility: "visible"})
    }

    return(
      <div>
      <h1 className="header">Tic Tac Toe</h1>
      <h2 className="header" style={this.state}>{this.state.message}</h2>
      </div>
    )
  }

}

export default Header
