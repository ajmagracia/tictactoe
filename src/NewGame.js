import React, { Component } from 'react'
import './button.css'
class NewGame extends Component {

  render(){
    return(
      <div className="button">

        <button onClick={this.props.reset}>New Game</button>
      </div>
    )
  }

}

export default NewGame
