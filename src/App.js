import React, { Component } from 'react';
import './App.css';
import Square from './Square'

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
  }

  countUp = () =>{
    this.setState({counter: this.state.counter+1})
  }

  render() {
    return (
      <body>
          <div className="ttt">
            <Square id = "1A"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "1B"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "1C"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "2A"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "2B"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "2C"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "3A"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "3B"  countUp={this.countUp} counter={this.state.counter}/>
            <Square id = "3C"  countUp={this.countUp} counter={this.state.counter}/>
          </div>
      </body>
    );
  }
}

export default App;
