import React, { Component } from 'react'
import './Square.css'


class Square extends Component {
  constructor(){
    super()
    this.state = {
      value: "",
      isFill: 'false'
    }
  }

  play = () =>{
    let counter = this.props.counter
    if(this.state.isFill === 'false'){
      if(this.props.counter%2===0){
        this.setState({value: 'X'})
        this.setState({isFill: 'true'})
        counter++
        console.log(counter)
        this.props.countUp()
      } else{
        this.setState({value: 'O'})
        this.setState({isFill: 'true'})
        counter++
        console.log(counter)
        this.props.countUp()
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
