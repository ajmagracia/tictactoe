import React, { Component } from 'react';
import './App.css';
import Square from './Square'
import NewGame from './NewGame'
import Header from './Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0,
      xo: [],
      squareArray: ["", "", "", "", "", "", "", "", "" ],
      win: false
    }
  }

  update = (xo) => {
    this.setState({xo: xo})
    this.setState({counter: this.state.counter+1})
  }

  setWin = () => {
    this.setState({win: true})
  }

  reset = () => {
    if(this.state.win || this.state.counter===9){
      window.location.reload()
    }else{
      window.alert('Quitters never win and winners never quit')
    }
  }

  render() {
    let squares = this.state.squareArray.map((square,index) =>{
      return(
        <Square index={index} key={index} counter={this.state.counter} win={this.state.win} xo={this.state.xo} update={this.update} setWin={this.setWin}/>
      )
    })
      return (
      <main>
        <Header counter={this.state.counter} win={this.state.win}/>
        <div className="ttt">
          {squares}
        </div>
        <br/>
        <NewGame reset={this.reset}/>
      </main>
    );
  }
}

export default App;
