import React, { Component } from 'react'
import './App.css'

class Header extends Component {
  render(){
    return(
      <div>
        <h1 className="header">Tic Tac Toe</h1>
        <h2 className="header" style={this.props}>{this.props.message}</h2>
      </div>
    )
  }

}

export default Header
